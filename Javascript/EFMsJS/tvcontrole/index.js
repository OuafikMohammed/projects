//class
class Commandes{
    constructor(nom,prix,taille,image,quantite){
        this.nom = nom;
        this.prix = prix;
        this.taille = taille;
        this.image = image;
        this.quantite = quantite; // Jout de la propriete quantite
    } 
}
//declaration
let pannierdecommandes = [];
// EVENTS
document.addEventListener("DOMContentLoaded",remplirTVs)
document.getElementById("btn-ajouter").addEventListener("click",ajouterAuPannier)

// FUNCTIONS
function cssquery (id){
    return document.getElementById(id)
}
function remplirTVs(){
    const request = new XMLHttpRequest();
    request.open("GET","tvsdata.json",true);
    request.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let responseData = JSON.parse(this.responseText)
            tvs = responseData.tvs
            let tvsoption = "";
            for (let i = 0 ; i < tvs.length;i++){
                tvsoption += `<option value = "${tvs[i].nom}">${tvs[i].nom}<option/>`;  
            }
            console.log(tvsoption)
            document.getElementById("tvoptions").innerHTML = tvsoption
        }   
    }
    request.send();
}

function ajouterAuPannier (e){
    e.preventDefault();
    let nom = cssquery('tvoptions').value;
    let image = "";
    let prix = 0;
    let taille = "";
    let quantite = cssquery('quantite').value;
    for (let i = 0; i < tvs.length; i++) {
        if (nom == tvs[i].nom) {
            taille = tvs[i].taille;
            prix = tvs[i].prix;
            image = tvs[i].Image;
            nom = tvs[i].nom
            break;
        }
    }
    console.log(quantite)
    let Commande = new Commandes(nom,prix,taille,image,quantite)
    pannierdecommandes.push(Commande)
    console.log(pannierdecommandes)
    let content =  '';
    let achats_table = cssquery("achats-table")
    for (let i  = 0 ; i< pannierdecommandes.length ; i++){
        
        content  += `<tr>
                        <th>${pannierdecommandes[i].nom}</th>
                        <td>${pannierdecommandes[i].quantite}</td>
                        <td><img style =" width:100px "src="${pannierdecommandes[i].image}"/></td>
                        <td><button class="btn btn-danger " id="btn_supprimer" >Supprimer<button/></td>
                    <tr>`
                    cssquery('tdata').innerHTML = content         
    }
   
    
    let btn_supprimer = [...document.querySelectorAll("#btn_supprimer")];
    // query selector all doen't work in for Each
    // forEach we use a list
    btn_supprimer.forEach((item)=>{
        item.addEventListener("click", (event) => {
            event.target.parentElement.parentElement.remove();
            // event.target refers to the event listener wich is btn_supprimer
            });
    })
    
    
}



