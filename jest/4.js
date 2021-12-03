let library = [
    {
        "bookid" : "1",
        "bookName" : "One",
        "author" : "",
        "cost" : 0
    },
    {
        "bookid" : "2",
        "bookName" : "Two",
        "author" : "",
        "cost" : 0
    },
    {
        "bookid" : "3",
        "bookName" : "Three",
        "author" : "",
        "cost" : 0
    },
    {
        "bookid" : "4",
        "bookName" : "Four",
        "author" : "",
        "cost" : 0
    },
    {
        "bookid" : "5",
        "bookName" : "Five",
        "author" : "",
        "cost" : 0
    }
]

function checkBookId(n) {
    let arr = library.map(data=> data.bookid)
    if(arr.includes(n)){
        return true
    }else {
        return null
    }    
}


module.exports = {library, checkBookId}