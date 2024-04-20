////////////////////////
document.write("to write in the doc we use document.write")


// Les types primitifs
console.log(typeof(5))//number
console.log(typeof(undefined))//undefined
console.log(typeof("to be or not to be"))//string
console.log(typeof(true))//boolean

//Les types structurels
console.log(typeof(null))//object
let numStagiaires = [1,2,3]
let cNumStagiares = numStagiaires
console.log(numStagiaires)
numStagiaires.push(5)

console.log(cNumStagiares)

let etudiant = {
    id: 1 ,
    nom: "Ouafik" ,
    prénom:"Mohammed",
}
console.log(etudiant)
let cEtudiant = Object.assign(etudiant,{age:14})
console.log(cEtudiant)
// Spread operator (opérateur de propagation)
liste = [20,30,40]
cliste=[...liste,50] //[20,30,40]
console.log(liste)
console.log(cliste)

let st = {
    id:1,
    nom:"Ahmed"
}
let cSt = {...st , age:14}
console.log(st)
console.log(cSt)