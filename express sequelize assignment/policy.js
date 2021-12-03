var express=require("express");
var Sequelize=require("sequelize");
var dbConfig=require("./db.config");

const app=express();

//Connect to the database.
const sequelize=new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    pool:
    {
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
});

let policyTable = sequelize.define('policyTable', {
    policyNumber : {
        primaryKey : true,
        type : Sequelize.INTEGER
    },
    policyHolder : Sequelize.STRING,
    policyAmount : Sequelize.INTEGER,
    maturityAmount : Sequelize.INTEGER,
    nominee : Sequelize.STRING

}, {
    timestamps: false,
    freezeTableName: true
});

policyTable.sync().then(()=>{
    console.log("Table is created successfully");
    }).catch((err)=>{
        console.log("Error occurred"+err)
    })

//get all policy info

app.get('/getAll', (req, res) => {
    policyTable.findAll({raw:true}).then(data=>
        {
            res.status(200).send(data);
        }).catch(err => {
            console.log(err)
            res.status(400).send(err)
        })
})

//get policy by id

app.get('/get/:id', (req,res)=> {
    policyTable.findByPk(req.params.id).then((data) => {
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(400).send(err)
    })
})


//inserting new record

app.post('/insert', (res,req)=> {
    policyTable.create({
        policyNumber : req.body.policyNumber,
        policyHolder : req.body.policyHolder,
        policyAmount : req.body.policyAmount,
        maturityAmount : req.body.maturityAmount,
        nominee : req.body.nominee
    }).then ( () => {
        console.log("Record created successfully!")
        res.status(200).send("Record inserted!!!")
    })
    .catch((err)=> {
        console.error(err)
        res.status(400).send(err)
    })
})


//update policy

app.put('/update', (req, res)=> {
    policyTable.update(
        {
            policyHolder : req.body.policyHolder,
            policyAmount : req.body.policyAmount,
            maturityAmount : req.body.maturityAmount,
            nominee : req.body.nominee
        },
        {
            where : {policyNumber : req.body.policyNumber}
        }
    ).then(data => {
        console.log(data)
        res.status(200).res.send("Record updated successfully!")
    })
    .catch(err=> {
        console.log(err)
        res.status(400).send(err)
    })
})


//delete policy

app.delete("/delete/:id",function(req,res){
    var id=req.params.id;
    console.log("Given id is"+id);
    policyTable.destroy({where:{policyNumber :id}}).then(data=>
        {
            console.log(data);
            var str="Record deleted successfully";
            res.status(200).send(str);
        }).catch(err=>{
            console.error("There is an error while deleting record:"+err);
            res.status(400).send(err);
        })
})



//defining Users table

let Users = sequelize.define('users', {
    userId : {
        primaryKey: true,
        type : Sequelize.INTEGER
    },
    password : Sequelize.STRING,
    role : Sequelize.STRING
}, {
    timestamps: false
});


//creating user table

// Users.sync().then(()=>{
//     console.log("Table is created successfully");
//     }).catch((err)=>{
//         console.log("Error occurred"+err)
//     })

//inserting users

app.post('/register', (req,res)=> {
    Users.create({
        userId : req.body.userId,
        password : req.body.password,
        role : req.body.role
    })
    .then( () => {
        console.log("User successfully registered!")
        res.status(200).send("User successfully registered!")
    })
    .catch( err => {
        console.log(err)
        res.status(400).send(err)
    })
})


//logging in user

app.post('/login', (req,res)=> {
    Users.findAll({raw:true}).then(data=> {
        lFlag = false;
        for(var i=0; i < data.length; i++) {
            if(data[i].userId == req.body.userId && data[i].password == req.body.password){
                lFlag = true;
                break;
            }
        }

        if(lFlag == true){
            console.log("Valid User!")
            res.status(200).send("Valid user!")
        }
        else{
            console.log("Invalid user!");
            res.status(400).send("Invalid user!")
        }
    })
    .catch(err => {
        console.log(err);
        res.status(400).send(err)
    })
})






app.listen(8000,function()
{
    console.log("Server is listening at http://localhost:8000");
})