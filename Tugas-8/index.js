// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
function buku(){
	readBooks(10000, books[0], function(x){
		console.log(x);
	});
}

buku();

//sudah bingung sedangkan sudah menyamakn dengan di grub tetap saja 
//readbooks is not function