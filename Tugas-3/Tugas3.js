//SOAL1
console.log(" SOAL1");
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(kataPertama.concat(" ",kataKedua).concat(" ",kataKetiga).concat(" ",kataKeempat.toUpperCase()));

//SOAL2
console.log("\n","SOAL2");
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "3"
var kataKeempat = "4"

var intPertama = parseInt(kataPertama);
var intKedua = parseInt(kataKedua);
var intKetiga = parseInt(kataKetiga);
var intKeempat = parseInt(kataKeempat);
console.log(intPertama);
console.log(intKedua);
console.log(intKetiga);
console.log(intKeempat);

//SOAL3
console.log("\n","SOAL3");
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14);  
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 32); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);


//SOAL4
console.log("\n","SOAL4");
var nilai = 75;

if( nilai < 50 ) {console.log("E");}
else if ( nilai >= 50 && nilai < 60 ) {console.log("D");}
else if ( nilai >= 60 && nilai < 70 ) {console.log("C");}
else if ( nilai >= 70 && nilai < 80 ) {console.log("B");}
else if ( nilai >= 80 ) {console.log("A");}


//SOAL5
console.log("\n","SOAL5");
var tanggal = 17;
var bulan = 12;
var tahun = 1999;

switch(bulan){
	case 1: { var bulan = "Januari"; break; }
	case 2: { var bulan = "Februari"; break; } 
	case 3: { var bulan = "Maret"; break; }
	case 4: { var bulan = "April"; break; }
	case 5: { var bulan = "Mei"; break; }
	case 6: { var bulan = "Juni"; break; }
	case 7: { var bulan = "Juli"; break; }
	case 8: { var bulan = "Agustus"; break; }
	case 9: { var bulan = "September"; break; }
	case 10: { var bulan = "Oktober"; break; }
	case 11: { var bulan = "November"; break; }
	case 12: { var bulan = "Desember"; break; }
;}

console.log(tanggal.toString().concat(" ",bulan).concat(" ",tahun));