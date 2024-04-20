//declarations
class Achat {
    constructor(code,titre, description, prix , categorie){
        this.code =code;
        this.titre=titre;
        this.prix=prix;
        this.description=description;
        this.categorie=categorie;
    }
}

let achats = []
let achat1 = new Achat(100,"ecran LED 42",5000,"TECH")
let achat2 = new Achat(100,"PC gamer",30000,"TECH")

//events
document.addEventListener("DOMContentLoaded",chargerdonnees)
document.getElementById('sauvegarder').addEventListener("click",(e)=>{
    e.preventDefault();
    sauvegarder();
})
selectelem('annuler').addEventListener("click",(e)=>{
    e.preventDefault();
    annuler();
})
selectelem('vider').addEventListener("click",(e)=>{
    e.preventDefault();
    Vider();
})
//functions
function chargerdonnees(){
    let categories;
    const request = new XMLHttpRequest();
    request.open("GET","data.json",true)
    request.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200){
            let responseData = JSON.parse(this.responseText);
            console.log(responseData)
            categories = responseData.categories
            console.log(categories)
            let categoriesopts ;
            for (let i = 0 ; i<categories.length ;i++){
                categoriesopts += `<option value="${categories[i].libelle}">${categories[i].libelle}</option>`
            }
            document.getElementById('categorie').innerHTML = categoriesopts
        }
    }
    request.send();
}
function selectelem(id){
    return document.getElementById(id)
}
function sauvegarder(){
    let code = selectelem('code').value,
    titre = selectelem('titre').value,
    prix = selectelem('prix').value
    let categorie = selectelem('categorie').value
    let achat = new Achat(code , titre , description , prix, categorie)
    achats.push(achat)
    console.log(achats)
}

function annuler(){
    selectelem('productsForm').style.display='none'
}
function Vider(){
    selectelem('productsForm').reset()
}

function afficher_data(){
    let content;
    let achats_table = selectelem("acahts-table")
    for (let i = 0 ; i < achats_table.rows.length ; i++){
        content += `<tr>
                        <th scope="row">${achats[i].code}
                        <td></td>
                    </tr>`
    }
}