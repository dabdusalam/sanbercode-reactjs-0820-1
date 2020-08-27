//SOAL1
console.log("\n","SOAL1");
var a =1;
console.log("LOOPING PERTAMA");
while( a <= 20) {
	if (a%2==0) {
		console.log(a,"- I lovee Coding");
	}
	a++;
}

var b =20;
console.log("LOOPING KEDUA");
while( b >= 1) {
	if (b%2==0) {
		console.log(b,"- I will become a frontend developer");
	}
	b--;
}

//SOAL2
console.log("\n","SOAL2");
for (var i = 1; i <= 20; i++) {
	if(i%3==0 && i%2==1){
		console.log(i,"- I Love Coding");
	}
	else if(i%2==0){
		console.log(i,"- Berkualitas");
	}
	else {
		console.log(i,"- Santai")
	}
}

//SOAL3
console.log("\n","SOAL3");
var a ="";
for (var i = 1; i <= 7; i++) {
	for (var j = 1; j <= i; j++) {
		a += "#";
	}
	a += "\n";
}
console.log(a);

//SOAL4
console.log("\n","SOAL4");
var kalimat="saya sangat senang belajar javascript";
var hasil = kalimat.split(" ");
console.log(hasil);

//SOAL5
console.log("\n","SOAL5");
var daftarBuah = ["2. Apel","5. Jeruk","3. Anggur","4. Semangka","1. Mangga"];
daftarBuah.sort();
for (var i =0; i <= 4; i++) {
	console.log(daftarBuah[i]);
}
