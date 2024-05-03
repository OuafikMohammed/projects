class Stagiaire{
    constructor(code, nom , filiere , note){
        this.code = code;
        this.nom = nom;
        this.filiere = filiere ;
        this.note = note
    }
}
let stagiaires=[]
let stagiaire1 = new Stagiaire(1 , "Alami Hicham" ,  "tdi" , 8)
stagiaires.push(stagiaire1)
//declaration
let btn_ajouter = document.getElementById("btn_ajouter_note");
let code = document.getElementById("code");
let nom = document.getElementById("nom");
let note = document.getElementById("note");
let lire = document.getElementById("lire");


function validation (){
    
    let valid =true;
    if (code.value.trim() === ""){

        console.log("Champ id est obligatoire")
        valid = false;
    }
    if (nom.value.trim() === ""){
        
        console.log("Champ nom est obligatoire")
        valid = false;
    }
    if (note.value.trim() === ""){

        console.log("Champ note est obligatoire")
        valid = false;
    }
    return valid
}
btn_ajouter.addEventListener("click",(e)=>{
    e.preventDefault();
    let valid = validation();
    if (valid == true){
        let filiere = document.querySelector("input[name='filiere']:checked");
        let stagiaire = new Stagiaire(code.value ,nom.value , filiere.value, note.value)
        // let obj = {code:code.value , nom:nom.value , filiere:filiere.value , note:note.value}
        // stagiaires.push(obj)
        stagiaires.push(stagiaire)
        console.log(stagiaires)
        afficherdata()
    }
});

function afficherdata(){
    let content = '';
    for(let i = 0 ; i < stagiaires.length ; i++){

        content +=
        `<tr>
            <th>${stagiaires[i].code}</th>
            <td> ${stagiaires[i].nom}</td>
            <td>${stagiaires[i].note}</td>
            <td>${stagiaires[i].filiere}</td>
            <td>
                <button class="btn btn-danger btn-supprimer" onclick="supprimer_stagiaire(event)" id="${i}">Supprimer</button>
            </td>
            
        </tr>`;
    }
    document.getElementById("tbody").innerHTML = content
    // meilleure note
    let liste_note = stagiaires.map(function(itemValue){
        return itemValue.note;
    }) 

    let best_note = Math.max(...liste_note)
    document.getElementById("best-note").textContent = best_note
    if (note.value < 10){
        note.style.color = "red"
    }else{
        note.style.color = "green"
    }
}
function supprimer_stagiaire(event){
    event.preventDefault();
    console.log(event.currentTarget.id)
    let stagiaireSelectionner = stagiaires[event.currentTarget.id].code
    stagiaires = stagiaires.filter((itemValue)=>{
        return itemValue.code != stagiaireSelectionner
    })
    afficherdata();
}
lire.addEventListener("click",lires)
function lires (e){
    e.preventDefault();
    console.log(stagiaires.find((item)=>{
        return item.code == code.value
        // item.code veut dire l'acces a  l'objet stagiaire et au code:"code"
        // code.value veut dire l'acces a la variable code qui est le code entree et acceder a sa valeur
    }))


}