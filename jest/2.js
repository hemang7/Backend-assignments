const { array } = require("yargs")

function largest2(a,b) {
    if(a > b){
        return a
    } else {
        return b
    }
}

function largest3(a,b,c) {
    if (a > b && a > c){
        return a
    }else if (b > a && b > c){
        return b
    }else{
        return c
    }

}

function fact(a) {
    if(a < 0) return;
    if(a < 2) return 1;
    return a * fact(a - 1);
}

function evenOdd(n) {
    if(n % 2 == 0){
        return true
    } else {
        return false
    }
}

var arr = []

function largest(a,b,c) {
    var arr = [a,b,c]
    if (a > b && a > c){
        return a
    }else if (b > a && b > c){
        return b
    }else{
        return c
    }
}

var arr2 = [1,2,3,4]

function checkArray(n) {
    if(arr2.includes(n)){
        return true
    }

}

module.exports = {largest2, largest3, fact, evenOdd, largest, checkArray}

