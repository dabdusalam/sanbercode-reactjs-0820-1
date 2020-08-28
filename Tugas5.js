//SOAL1

console.log("\n","SOAL1");
function halo(){
return " Halo Sanbers!";
}
console.log(halo());

//SOAL2
console.log("\n","SOAL2");
var num1 = 12;
var num2 = 4;
function kalikan(a,b){
	return a*b;
}
var hasilkali = kalikan(num1,num2);
console.log(hasilkali)

//SOAL3
console.log("\n","SOAL3");
var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";
function introduce(a,b,c,d){
	return "Nama saya "+[a]+", umur saya "+[b]+" tahun, alamat saya di "+[c]+", dan saya punya hobby yaitu "+[d]+"!";
}

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);

//SOAL4
console.log("\n","SOAL4");
var arrayDaftarPeserta= ["Asep", "laki-laki", "baca buku" , 1992];
var arrayDaftarPesertaobj = {
	nama: arrayDaftarPeserta[0], "Jenis kelamin": arrayDaftarPeserta[1], hobi: arrayDaftarPeserta[2], "tahun lahir": arrayDaftarPeserta[3]}
console.log(arrayDaftarPesertaobj);

//SOAL5
console.log("\n","SOAL5");
var buah = [
{nama: "strawberry", warna: "merah", ada_bijinya: "tidak", harga: 9000},
{nama: "jeruk", warna: "oranye", ada_bijinya: "ada", harga: 8000},
{nama: "Semangka", warna: "Hijau & Merah", ada_bijinya: "ada", harga: 10000},
{nama: "Pisang", warna: "kuning", ada_bijinya: "tidak", harga:5000},
];
console.log(buah[0]);

//SOAL6
console.log("\n","SOAL6");

var dataFilm = [];
function tambah_data_film(a,b,c,d){
	var objfilm = { nama: a, durasi: b, genre: c, tahun: d}
	dataFilm.push(objfilm);
}
tambah_data_film ("Kingsman", "2 jam 10 menit", "Comedy", 2014);
tambah_data_film ("Weathering with you", "1 jam 51 menit", "Fantasi", 2019);
tambah_data_film ("Ip Man 4", "1 jam 45 menit", "Aksi", 2019);
console.log(dataFilm);