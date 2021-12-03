var employee = [
    {
        id : 1,
        name : 'hemang',
        dept : 'IT'
    }, 
    {
        id : 2,
        name : 'rahul',
        dept : 'HR'
    },
    {
        id : 3,
        name : 'manish',
        dept : 'Accounts'
    }
]

var express = require('express');

var app = express();

app.use(express.json());


//Get all employees
app.get('/getEmployee', (req,res)=> {
    res.send(employee)
})

//Get employee by id
app.get('/getEmployeeById/:id', (req,res)=>{
    var Id = req.params.id;
    var searchEmployee = {}
    for(var i = 0; i < employee.length;i++){
        if(employee[i].id == Id){
            searchEmployee = employee[i]
        }
    }
    res.send(searchEmployee);
});

//Get employee by name
app.get('/getEmployeeByName/:name', (req, res)=>{
    var Name = req.params.name
    var searchEmployee = {}
    employee.forEach(ele => {
        if(ele.name == Name) {
            searchEmployee = ele
        }
    })
    res.send(searchEmployee);
})

//Insert employee
app.post("/insertEmployee", (req, res)=> {
    var object = {
        "id" : req.body.id,
        "name" : req.body.name,
        "dept" : req.body.dept
    };
    employee.push(object);
    res.send("Employee inserted succsessfully!")
});

//Update employee 
app.get('/updateEmployee/:Id', (req, res)=> {
    var id = req.body.id;
    for(var i=0; i < employee.length; i++){
        if(employee[i].id == id){
            employee[i].id = req.body.id;
            employee[i].name = req.body.name;
            employee[i].dept = req.body.dept
        }
    }
    res.send("Employee data updated!!")
})

app.listen(8000, () => {
    console.log("Server started at http://localhost:8000/")
})

//delete employee
app.put('/deleteEmployee', (req, res) => {
    var empId = req.body.id;
    for(var i=0 ; i < employee.length; i++) {
        if(employee[i].id == empId){
            employee.pop(employee[i])
        }
    }

    res.send("Employee deleted successfully!")
});