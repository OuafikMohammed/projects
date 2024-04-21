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
            break;
        }
    }    
    let Commande = new Commandes(nom,prix,taille,image,quantite)
    pannierdecommandes.push(Commande)
    console.log(pannierdecommandes)
    let content =  '';
    let achats_table = cssquery("achats-table")
    for (let i  = 0 ; i< pannierdecommandes.length ; i++){
        if(!quantite){
            quantite = cssquery('quantite').value
        }
        content += `<tr>
                        <th>${tvs[i].nom}</th>
                        <td>${quantite}</td>
                        <td>${tvs[i].Image}</td>
                        <td><button class="btn-danger" id="btn-supprimer">Supprimer<button/></td>
                    <tr>`
                    let currentAchat = '';
                    currentAchat = achats_table.rows[i].getElementsByTagName('th')[0].innerHTML
    }
   
    console.log(achats_table)
    cssquery('tdata').innerHTML = content
    document.getElementById("btn-supprimer").addEventListener("click",deleter)
    
}
function deleter (e){
    e.preventDefault();
    pannierdecommandes = pannierdecommandes.filter((item)=> item.nom !== currentAchat)
}