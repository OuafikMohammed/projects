// Declaration
class Achat {
    constructor(code , titre , description , prix , categorie){
        this.code = code;
        this.titre = titre ;
        this.description = description
        this.prix = prix;
        this.categorie = categorie;
    }
}
let achats = []
let currentAchat;
const achat1 = new Achat(1,"Mouse" , "Gaming Mouse" , 500 , "Informatique")
const achat2 = new Achat(2,"Keyboard" , "Gaming Keyboard" , 500 , "Informatique")

achats.push(achat1);
achats.push(achat2);
console.log(achats)
// Events
document.addEventListener("DOMContentLoaded" , chargement )
document.getElementById("sauvegarder").addEventListener("click",sauvegarder)
document.getElementById("vider").addEventListener("click",(e)=>{
    e.preventDefault();
    Vider();
})
document.getElementById("afficher-data").addEventListener("click",(e)=>{
    e.preventDefault();
    afficher_data();
})
document.getElementById("supprimer").addEventListener("click",supprimer)
// Functions
function chargement (){
    let categoriesList ;
    const xhr = new XMLHttpRequest();
    xhr.open("GET" , "categories.json", true)
    xhr.onreadystatechange = ()=>{
        if (this.readyState == 4 &&  this.status == 200){
            let responseData = JSON.parse(this.responseText);
            /*JSON.parse()=>from JSON to JS*/
            categoriesList = responseData.categories;
            console.log(categoriesList); 
            let categorieOpts;
            /*chaque varia doit etre declarée */
            for (let i = 0 ; i < categoriesList.length ; i++){
                categorieOpts += `<option value ="${categoriesList[i].libelle}">${categoriesList[i].libelle}</option>`
            }
            console.log(categorieOpts)
            document.getElementById("categorie").innerHTML = categorieOpts
            // valeur de categories opts affectée a 
        }
    }
    xhr.send();
}


function sauvegarder (e){
    e.preventDefault();
    let code = selectionnerElement('code'),
        titre = selectionnerElement('titre').value,
        prix = selectionnerElement('prix').value,
        description = selectionnerElement('description').value
    let categorie = selectionnerElement('categorie').value

    let achat = new Achat(code.value , titre, description ,prix, categorie)
    achats.push(achat)
    console.log(achats)
}

function selectionnerElement (idElement){
    return document.getElementById(idElement)
}

function Vider(){
    selectionnerElement('code').value="";
    selectionnerElement('titre').value="";
    selectionnerElement('prix').value="";
    selectionnerElement('categorie').value="";
}

function afficher_data(){
    
    let content = '';
    let achats_table = document.getElementById("achats-table")
    // achats.forEach((item)=>{
    //     content += `<tr>
    //                     <th scope ="row">${item.code}</th>
    //                     <td>${item.titre}</td>
    //                     <td>${item.description}</td>
    //                     <td>${item.prix}</td>
    //                     <td>${item.categorie}</td>
    //                 </tr>`
    // })
    for (let i = 0 ; i< achats.length ; i++){
        content += `<tr>
                        <th scope ="row">${achats[i].code}</th>
                        <td>${achats[i].titre}</td>
                        <td>${achats[i].description}</td>
                        <td>${achats[i].prix}</td>
                        <td>${achats[i].categorie}</td>
                    </tr>`
    }
    selectionnerElement('tdata').innerHTML = content
    for (let i = 0 ; i<achats_table.rows.length ; i++){
        achats_table.rows[i].addEventListener("click",function(){
            for(let j=0 ; j<achats_table.rows.length; j++){
                achats_table.rows[j].classList.remove("table-success");
            }
            achats_table.rows[i].classList.add("table-success")
            currentAchat = achats_table.rows[i].getElementsByTagName('th')[0].innerHTML
            
            console.log(currentAchat)
        })
    }
}

function supprimer(){
    //FILTRER  PAR   //////////// => CONDITION 
    achats = achats.filter((item) =>  item.code!== currentAchat)
    afficher_data();
}

// let testTimeone = setTimeout(()=>{
//     console.log("Ouafik")
// },5000)
// // clearTimeout(testTimeone)

// let i = 0;
// testTimetwo= setInterval(()=>{
//     i++;
//     console.log(i)
// },1000)

// clearInterval(testTimetwo)
// document.getElementById('btn-nouvelle').addEventListener("click",function(){
//     window.open()
// })
// document.getElementById('btn-nouvelle2').addEventListener("click",function(){
//     window.close()
// })