var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
function buku(){
	readBooksPromise(10000,books[0])
	.then(readBooksPromise(setTimeout, books[1]))
	.then(readBooksPromise(setTimeout, books[2]))
}

buku();