var userArr = [
    {
        "uid" : "hemang",
        "pwd" : 1234,
        "role" : "user"
    }
]

function Registration (user,pass,userRole) {
    if(userArr.push({"uid":user,"pwd":pass,"role":userRole}))
        return "Registration Successful!"
    else 
        return "Registration Failed."
}

module.exports = {Registration}