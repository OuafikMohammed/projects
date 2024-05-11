
let n1 = Number(document.querySelector(".num1").value);
let n2 = Number(document.querySelector(".num2").value);

let somme = n1 + n2 ;
document.querySelector(".resultat").value = somme;
if (somme > 20 ) {
    document.querySelector(".resultat").style.backgroundColor = "red"
}
else {
    document.querySelector(".resultat").style.backgroundColor = "green"
}