var userArr2 = [
    {
        "uid" : "hemang",
        "pwd" : 1234,
        "role" : "user"
    }
]

const Matchers = 
{
    returnReg: function(user,pass,role1)
{
        if(userArr2.push({"uid":user,"pwd":pass,"role":role1}))
        { console.log(userArr2)
        return "Registration Successful!";
        }
        else
            return "Registration Failed!"
},
 returnLog: function(user,pass)
{
     var flag = 0;
     userArr2.forEach((ele)=>
     {
         if((ele.uid==user) && (ele.pwd==pass))
         {
             flag = 1;
         }
     }
     )
        if(flag==0)
            return "Invalid User"
        else
            return "Valid User"
 }
}

module.exports = {Matchers}
 