//SOAL1

/**/
class Animal {
	constructor(nama) {
		this.hewaname = nama;
		this.kaki = 4;
		this.cold = "false";		
	}
	get name(){
		return this.hewaname;
	}
	get legs(){
		//return this.hewaname.length;
		return this.kaki;
	}
	get cold_blooded(){		
		return this.cold;
	}
    // Code class di sini
}
class Ape extends Animal{
	constructor(nama,ape){
		super(nama);
		this.ape = ape
	}
	yell(){
		return 'Auooo';
	}
}
class Frog extends Animal{
	constructor(nama,Frog){
		super(nama);
		this.Frog = Frog
	}
	jump(){
		return 'hop hop';
	}
}

 //RELASE0
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

//RELASE0
var sungokong = new Ape("kera sakti")
console.log(sungokong.yell()) // "Auooo"
 
var kodok = new Frog("buduk")
console.log(kodok.jump()) // "hop hop" 

