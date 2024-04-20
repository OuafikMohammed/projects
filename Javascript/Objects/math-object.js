// let nombre = -20;

// console.log(Math.abs(nombre));

// let nombre2 =5.4;

// console.log(Math.ceil(nombre2));

// let nombre3 = -5.8;
// // // diff entre floor et trunc
// console.log(Math.floor(nombre3));

// console.log(Math.trunc(nombre3))
// // // SQUARE ROOTS = RACINE CARRE
// console.log(Math.sqrt(4))

// console.log(Math.max(12,100,10,34))
// console.log(Math.min(12,45,3,34))

let nombres = [12,45,10,34]
// ... est importante pour extraire le contenu
console.log(Math.max(...nombres))

const stagiaires = [{id:1 , nom:"Ouafik", note : 16},
                    {id:2 , nom:"Mahfoud", note : 12},
                    {id:3 , nom:"Merzoug", note : 18},
                    {id:4 , nom:"Sidqui", note : 18},
                    ]

let ListeNotes = stagiaires.map(function(itemValue){
    return itemValue.note;
})

console.log(ListeNotes)
let maxNote = Math.max(...ListeNotes)
console.log(maxNote)
// filter  returns a lot of values and find returns one value

let majoranstsListe = stagiaires.find(function(itemValue){
    return itemValue.note == maxNote
})
console.log(majoranstsListe)
let majoranstsListe2 = stagiaires.filter(function(itemValue){
    return itemValue.note == maxNote
})
console.log(majoranstsListe2)

console.log(Math.floor(Math.random()*20 )/*+1*/)
// // cause it starts from 1 to 19 by default 
// // solution we use +1 to start form 0 (inclusive) to 20 (inclusive)
console.log(Math.round(Math.random()*20))
/*1 => 20 */ 