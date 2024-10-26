class Etudiant {
    constructor (id ,nom , age){
        this.id = id ;
        this.nom = nom ;
        this.age = age ;
    }
}
let et2 = new Etudiant("3","OUAFIK", 18);
console.log(et2);
let salutation = `  Welome ${et2.nom} , you are ${et2.age}`;
console.log(salutation)
export let anneex = 2024;
console.log(anneex)
export default Etudiant;
// operateur conditionnel ternaire = ternary operator
let note = 17;
let isStudent = false ;

let observation = isStudent ? 'He is studying here ': 'He is not studying Here';
let decision = note > 10 ? 'Admis' : 'Redoublant';
console.log(decision)
console.log(observation)
// Object destructuring
let personne = {
    id:1,
    nom : 'Ait Taleb',
    prenom : 'Nader'
}
console.log(personne.nom);
console.log(personne['nom']);
let etudiants = [
    {id : 1 , nom : "Ait Taleb" , prenom : "Nader " , age : 18 , note : 15},
    {id : 2 , nom : "Sidqki" , prenom : "Zakaria " , age : 20 , note : 17},
    {id : 3 , nom : "Mahfoud " , nom : "Annass " , age : 20 , note : 12}
]
console.log(etudiants[1].nom);
let {id , nom, prenom} = etudiants[1] ;
console.log( `id : ${id}  name : ${nom} ${prenom}`);
export let annee = 2024;
// let listetu = etudiants.map((etu)=>{
//     let anneeact = 2024;
//     return `Le nom complet du stagiare est : ${etu['nom']}   ${etu['prenom']}  d'age  ${etu.age} en annee de formation ${anneeact}`;
// })
// console.log({listetu})
// let mentionbien = 14;
// let mention = etudiants.filter((etu)=>{
//     return `${etu.note} ` > `  ${mentionbien} `
// })
// console.log(mention)

let total = etudiants.reduce((accumulator,itemValue)=>{
    return accumulator + itemValue.note;
} , 0)
let moy = total / etudiants.length
console.log(moy);