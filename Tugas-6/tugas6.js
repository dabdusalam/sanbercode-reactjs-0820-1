//SOAL1
/*
const r =7;
var luas_lingkaran = (r) => {let luas_lk = 3.14*r*r;
	console.log(luas_lk);
	return
}
let keliling_lingkaran = (r) => 3.14*(r+r);
luas_lingkaran(r);
console.log(keliling_lingkaran(r));
*/
//SOAL2
let kalimat= "";
const sambung_kalimat = (s,s1,p,o,k) => {
	return{
		s: s,
		s1: s1, 
		p: p, 
		o: o, 
		k: k;
		ful_kalimat = function(){
			console.log('${s} ${s1} ${p} ${o} ${k}'	)
			return
		}
	}
}

sambung_kalimat("saya","adalah","seorang","frontend","developer").ful_kalimat()
//SOAL3
/*
const newFunction = (firstName, lastName) =>{
  return {
    firstName: firstName,
    lastName: lastName;
    fullName = function(){
      console.log(firstName + " " + lastName)
      return 
    }
  }
}
 
//Driver Code 
newFunction("William", "Imoh").fullName() 

/*
//SOAL4
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}
const firstName = newObject.firstName;
const lastName = newObject.lastName;
const destination = newObject.destination;
const occupation = newObject.occupation;
// Driver code
console.log(firstName, lastName, destination, occupation)
*/
//SOAL5