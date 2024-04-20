const stagiaires = {
    id:1,
    nom : "Ouafik",
    prenom: "Mohammed",
    age:18
}

let stagiaireJson = JSON.stringify(stagiaires)
console.log(stagiaires);

console.log(stagiaireJson);

stagiaireJson = JSON.parse(stagiaireJson);

console.log(stagiaireJson.nom)
containerAcc  = document.getElementById("container")
document.getElementById("btn-load").addEventListener("click", loadTxt);
document.getElementById("btn-sta").addEventListener("click", loadstagiaires)
// document.getElementById("btn-load").addEventListener("click", (e , b) =>loadTxt);
function loadTxt(e) {
    e.preventDefault();
    let request = new XMLHttpRequest();
    request.open("GET", "file.txt", true);
    request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200){
            containerAcc.innerHTML = this.responseText
            console.log(containerAcc)
        }
    };
    request.send();
}
// request.onload
function loadstagiaires (){
    let request = new XMLHttpRequest();
    request.open("GET" , "sta.json", true);
    request.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            containerAcc.innerHTML = this.responseText
            console.log(this.responseText)
        }
    }
    request.send();
};