var userArray = [
    {
        "id" : "hemang",
        "pwd" : "123"
    },
    {
        "id" : "test",
        "pwd" : "test"
    },
    {
        "id" : "admin",
        "pwd" : "admin"
    }
]

function login(Id,pass){
    var flag = 0;
    userArray.forEach((ele)=> {
        if((ele.id==Id) && (ele.pwd==pass)){
            flag = 1
        }
    })
    if(flag==0){
        return "Invalid user"
    }else {
        return "Valid user"
    }
}

module.exports = {login, userArray}