var express = require('express');

var app = express();

app.use(express.json());

app.post('/salary', (req, res) => {
    var basic = req.body.basic;
    var hra = req.body.hra;
    var da = req.body.da;
    var it = req.body.it;
    var pf = req.body.pf;

    res.send({'Total Salary : ' :basic + hra + da - (it + pf)})
})

app.listen(8000, () => {
    console.log("Server started at http://localhost:8000/salary")
})