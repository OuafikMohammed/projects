//////////////////////
//// concaténation ///
//////////////////////
let texte1 = "OFPPT"
texte1 += " "
let texte2 = "En force "
let texte3 = texte1 + texte2 
console.log(texte3)
///////////////////////////////
//opérateursdecomparaison//////
///////////////////////////////

let a = 10 ; // type=number ; value=10 
let b = '10' ; // type=string ; value=10 
if (a===b){
    console.log("same type and same value")
} else if (a==b){
    console.log("same value")
} else {
    console.log("false")
}
//////////////////////////////////
////opérateurs logiques //////////
//////////////////////////////////

let statut = "étudiant" ;
let age = 21 ;

if (statut== "étudiant" || age === 20 ){
    console.log("True")
}else{
    console.log ("False")
}


