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

var express = require("express");

var app = express();

app.use(express.json());

app.get('/getAllEmployeeData', (req, res)=> {
    res.send((employee));
})

app.listen(8000, () => {
    console.log("Server started on http://localhost:8000");
});