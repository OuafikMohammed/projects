// let branche = "developpement";
// let phrase = "hello-mr-Ouafik Med"
// console.log(branche.length)

// console.log(branche.charAt(3))
// // De 2 a 5
// console.log(branche.substring(2,6));

// let nom = "Ouafik";
// let prenom = "Mohammed"
// console.log(nom.toUpperCase())

// console.log(nom.toLowerCase())
// // startWith and endsWith
// console.log(prenom.startsWith("M"))
// console.log(prenom.endsWith("d"))
// //creates array from an object
// console.log(Array.from(prenom))
// // split returns an Array and inside .split(seperator) seperator can be (" " , "-", "/" ....)
// console.log(phrase.split("-"))

let vDate = new Date()
//
console.log(vDate.getFullYear())
// month starts from 0
console.log(vDate.getMonth())
// day 
console.log(vDate.getDate())
// starts from sundays count from 0
console.log(vDate.getDay());
//
console.log(vDate.getMinutes())
// Date
let vDateYest = new Date("2023-10-29")
console.log(vDateYest)
// setmonth starts from 0
vDateYest.setMonth(10)
console.log(vDateYest)