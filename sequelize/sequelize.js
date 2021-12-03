var Sequelize = require('sequelize');
var dbConfig = require('./db.config');

var sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect : dbConfig.dialect,
    pool : {
        min:dbConfig.pool.min,
        max:dbConfig.pool.max,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
});


// studentTable record creation
let studentTable = sequelize.define("StudentTable",
    {
      StudentId: Sequelize.INTEGER,
      Name: Sequelize.STRING,
      Stream: Sequelize.STRING,
      Marks: Sequelize.INTEGER,
    },
   {
      timestamps: false,
      freezeTableName: true,
    }
  );
 
  /*
studentTable.sync({ force: true })
.then(() => {
     console.log("Table Created Successfully");
}).catch((err)=>{
    console.error("Error is : " + err);
}).finally(() => {
    sequelize.close();
});
*/


//Inserting record
studentTable.create({
    StudentId:101,
    Name:'Dinesh',
    Stream:'CE',
    Marks:84
},{force:true}).then((data)=>{
    console.log("Record inserted successfully");
}).catch((err)=>{
    console.error("There is an error " + err);
});


//Inserting more than one record
studentTable.bulkCreate([
    {StudentId:102, Name:'Hemang', Stream:'CSE', Marks:79},
    {StudentId:103, Name:'Nikhil', Stream:'IT', Marks:81},
    {StudentId:104, Name:'Manish', Stream:'ECE', Marks:86},
    {StudentId:105, Name:'Bhaskar', Stream:'CSE', Marks:83},
],{force:true}).then( (data)=>{
    console.log("Records inserted into the table successfully");
}).catch( (err)=>{
    console.error("The error is: " + err);
});


// Defining the movie table structure
let movieTable = sequelize.define(
   "MovieTable",
   {
    MovieId: {
       primaryKey: true,
       type: Sequelize.INTEGER,
     },
    MovieName: Sequelize.STRING,
    Language: Sequelize.STRING,
   },
   {
    timestamps: false,
    freezeTableName: true,
});
/*
movieTable.sync({ force: true }).then(() => {
        console.log("Table Created Successfully");
}).catch((err)=>{
       console.error(err);
}).finally(() => {
     sequelize.close();
});
*/


//Inserting more than one record
movieTable.bulkCreate([
    {MovieId:1, MovieName:'Avengers : Endgame', Language:'English'},
    {MovieId:3, MovieName:'Spidermam', Language:'English'},
    {MovieId:4, MovieName:'83', Language:'Hindi'},
    {MovieId:5, MovieName:'Gulal', Language:'Hindi'},
]).then( (data)=>{
    console.log("Records inserted into the table successfully");
}).catch( (err)=>{
    console.error("The error is: " + err);
});



//Displaying all records using findAll()
movieTable.findAll({raw:true}).then( (data) => {
    console.log(data);
}).catch( (err) => {
    console.error("Error is :" + err);
});


// Defining the Employee table structure
let employeeTable = sequelize.define(
    "EmployeeTable",
    {
     EmpId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
     Name: Sequelize.STRING,
     Department: Sequelize.STRING,
     Designation: Sequelize.STRING
    },
    {
     timestamps: false,
     freezeTableName: true,
});
/* 
employeeTable.sync({ force: true }).then(() => {
        console.log("Table Created Successfully");
 }).catch((err)=>{
        console.error(err);
 }).finally(() => {
      sequelize.close();
 });
 */

//Inserting records
 employeeTable.bulkCreate([
    {EmpId:101, Name:'Hemang', Department:'IT', Designation:'Consultant'},
    {EmpId:102, Name:'Manish', Department:'HR', Designation:'Manager'},
    {EmpId:103, Name:'Yash', Department:'Automation', Designation:'Consultant'},
    {EmpId:104, Name:'Rahul', Department:'HR', Designation:'Trainee'},
]).then( (data)=>{
    console.log("Records inserted into the table successfully");
}).catch( (err)=>{
    console.error("The error is: " + err);
}); 


//Displaying all records using findAll()
employeeTable.findAll({raw:true}).then( (data) => {
    console.log(data);
}).catch( (err) => {
    console.error("Error is :" + err);
});



//Find by primary key
employeeTable.findByPk(101).then( (data) => {
    console.log(data.dataValues);
}).catch( (err)=>{
    console.error("Error is :" + err);
});



//display all the records where name of the employee is 'Vikram'
employeeTable.findAll({where:{Name:"Manish"},raw:true}).then( (data) => {
    console.log(data);
}).catch( (err) => {
    console.error("Error is :" + err);
});



//displaying name and department of all the records
employeeTable.findAll({attributes:['Name','Department'],raw:true}).then( (data) => {
    console.log(data);
}).catch( (err) => {
    console.error("Error is :" + err);
});


//display all the employees who are working in 'Automation' department.
employeeTable.findAll({where:{Department:"Automation"},raw:true}).then( (data) => {
    console.log(data);
}).catch( (err) => {
    console.error("Error is :" + err);
});



//Count the number of rows in the employee table using findAndCountAll()
employeeTable.findAndCountAll().then( (data) => {
    console.log("Number of records are :" + data.count);
}).catch( (err) => {
    console.error("Error is :" + err);
});



//Display all the records sorted on employee names
employeeTable.findAll({order:['Name'],raw:true}).then( (data) => {
    console.log(data);
}).catch( (err) => {
    console.error("Error is :" + err);
});



//Display names of Employee table using like operator in sequelize
const Op = Sequelize.Op;
employeeTable.findAll({
    where:{
        Name:{
            [Op.like]:'%s%'
        }
    }, raw:true
}).then( (data)=>{
    console.log(data);
}).catch( (err)=>{
    console.error("Error is: " + err);
});



//Executing SQL queries in Sequelize
sequelize.query("SELECT * FROM `EmployeeTable`",{type:sequelize.QueryTypes.SELECT}).then(function(data){
    console.log(data);
});



//display all the students whose are in CS Stream and have got more 75
const Op=Sequelize.Op;
studentTable.findAll({
    where:{
            [Op.or]:[{Stream:'CSE'},{Marks:75}]
    }, raw:true
}).then( (data)=>{
    console.log(data);
}).catch( (err)=>{
    console.error("Error is: " + err);
});



//Insert a new record in employee table using build() and save()
let employeeObj=employeeTable.build({EmpId:106, Name:'Aditi', Department:'HR', Designation:'Assistant'});
employeeObj.save();



//Update a record in employee table by changing your name to your full name (First name and Last name)
employeeTable.update(
    {Name:'Aditi Choudhary'},
    {where:{Name:'Aditi'}}
).then( (data)=>{
    console.log("Record updated successfully");
}).catch( (err)=>{
    console.error("Error is : " + err);
});



//Delete a record from employee table
employeeTable.destroy({
    where:{Name:'Yash'}
}).then((data)=>{
    console.log("Record deleted successfully");
}).catch((err)=>{
    console.error("Error is: " + err);
});



//Drop the Student table using drop()
studentTable.drop().then(()=>{
    console.log("Table dropped");
});
