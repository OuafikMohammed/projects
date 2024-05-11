// let CalculeClick = function(e){
//     e.preventDefault();
//     console.log("You clicked me !");
// }
// fonctions anonymes se sont des fonctions avec "function"
// fonctions fléchées se sont des fonctions avec =  et > mis sans utiliser "function"

let CalculeClick = (e) => {
    e.preventDefault();
    let n1 = Number(document.querySelector(".num1").value);
    let n2 = Number(document.querySelector(".num2").value)
    document.querySelector(".somme").textContent = n1 + n2 
}     
document.querySelector(".btn-calculer").addEventListener("click",CalculeClick)