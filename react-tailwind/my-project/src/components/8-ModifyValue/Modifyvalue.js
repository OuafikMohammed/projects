const liste = [
    {id : 1 , nom : "a"},
    {id : 2 , nom : "b"},
    {id : 3 , nom : "c"},
    {id : 4 , nom : "d"}
]
console.log(liste)
let newObj = {id : 5, nom : "eeeeeeeeeeeeeeeeee"}
let newListe = liste.map((item)=>{
 if (item.id == 2){
    item.nom = newObj.nom   
 }
 return item
})
console.log(newListe)