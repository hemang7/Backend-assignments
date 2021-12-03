var express = require("express");

var app = express();
app.use (express.json());

app.post("/login", function (req, res) {
    console.log("At /login of server side");

    var uid = req.body.uid;
    var pwd = req.body.pwd;

    console.log(`Given data for user id ${uid} pwd : ${pwd}`);

    var strToReturn = "You are not a valid user, pls check ";

    if(uid == 'hemang' && pwd == 'admin')
        strToReturn = "You are valid user.";

    res.send(strToReturn);
})

app.listen(8000, function () {
    console.log("Server is listening at http://localhost:8000")
})