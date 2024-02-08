// function declaration 
//function greet (){
//    console.log('Hello !');
//}
//greet();

function sum(a,b) {
    return a + b
}
let sm = sum(10,1)
console.log(sm)

// les fonctions flechees (arrow function)

let greet = () => console.log("hello isfo !");
greet();

let nomcomplet = (nom,prenom) => {
    let fullname = nom + ' ' + prenom;
    return fullname
};

console.log(nomcomplet("Ouafik", "Mohammed")) ;

const variable = () => {
    return "ma_variable"
    }
    console.log(variable()) // "ma_variable"

const variable2 = (a,b) => {
    return a*b;
    }
    console.log(variable2(2,3)) // 6

// les expressions lambdas
// Map : 1-returns a new array
//       2- it skips elements that aren't defined or null 
//       3- does not modify the original array
let jours = ["lundi" , "mardi " , 'mercredi' , 'jeudi ' , 'vendredi' , 'samedi ', ' dimanche']

// jours.map (function(item){
//     return(console.log(item))
// })
// jours.map(function(item){
//     if (item === "jeudi"){
//         item += "*jour férier" ;
//     }
//     return console.log(item);
// });

// console.log(item) ;
const stagiaires = [
    {nom:"Ouafik", prenom:"Mohammed" , age:"18"},
    {nom:"Sidqui", prenom:"zakaria" , age:"22"},
    {nom:"Merzoug", prenom:"khaled" , age:"18"}
];

// const nomsComplets = stagiaires.map(function (stagiaire) {
//     return `Le nom complet des stagiaire est : '${stagiaire.nom} ${stagiaire.prenom}`;
// });
// const nomsComplets = stagiaires.map((stagiaire) => {
//     return `Le nom complet des stagiaire est : '${stagiaire.nom} ${stagiaire.prenom}`;
// });
// const nomsComplets = stagiaires.map((stagiaire) => {
//     return 'Le nom complet des stagiaire est : ' , stagiaire['nom '] ," ",stagiaire['prenom'];
// });

// console.log(nomsComplets);

let Nomcomplet_Age = stagiaires.map((item) => {
    return 'le nom complet des stagiaires avec leur age : nom : '+ item.nom + 'prenom :' + item.prenom  + 'age :'+ item.age 
});
console.log(Nomcomplet_Age)

// const Nomcomplet_Age = stagiaires.map((item) => {
//     return `Le nom complet des stagiaires avec leur âge : nom : ${item.nom}, prénom : ${item.prenom}, âge : ${item.age}`;
// });

// console.log(Nomcomplet_Age);

// const nomsComplets = stagiaires.map((stagiaire)  => {
//     return "Le nom complet du stagiaire est : " + stagiaire['nom'] + " " + stagiaire.prenom + ", âge : " + stagiaire.age;
// });

// console.log(nomsComplets);

// let nomstagiares;
// nomstagiares = stagiaires.map((item,index,) => {
//     let st ;
//     st = { ...item, branche: "DD" ,id:index + 1 }
//     if ((item.age) > 20 ) {
//         st.remarque =">20" ;
//     }
//     else if ((item.age) < 20 ) {
//         st.remarque ="<20" ;
//     }
//     return st
// })
// console.log(nomstagiares)
 