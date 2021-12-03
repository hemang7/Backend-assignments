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

function returnBookDataById(n) {
    var item = library.find(item => item.id == n)
    if(n < 5){
        return item
    } else {
        return null
    }
}

module.exports = {library, returnBookDataById}