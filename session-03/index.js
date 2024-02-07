////////////////////////
document.write("to write in the doc we use document.write")


// Les types primitifs
console.log(typeof(5))
console.log(typeof(undefined))
console.log(typeof("to be or not to be"))
console.log(typeof(true))

//Les types structurels
console.log(typeof(null))
let numStagiaires = [1,2,3]
let cNumStagiares = numStagiaires
numStagiaires.push(5)

console.log(numStagiaires)
console.log(cNumStagiares)

let etudiant = {
    id: 1 ,
    nom: "Ouafik" ,
    prénom:"Mohammed",
}
let cEtudiant = Object.assign({age:14} , etudiant)
console.log(etudiant)
// Spread operator (opérateur de propagation)
//list in a list 
liste = [20,30,40]
cliste=[...liste,50] //[20,30,40]
console.log(liste)
console.log(cliste)

let st = {
    id:1,
    nom:"Ahmed"
}

let cSt = {...st,age:19}
console.log(st)
console.log(cSt)