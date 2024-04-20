// // Constructeur 
// // class stagiaire
// function Stagiare(nom, prenom , age , branche){
//     // this.attributnom = valeur ,
//     this.nom = nom , 
//     this.prenom = prenom ,
//     this.age = age,
//     this.branche = branche,
//     this.presenterVous =function(){
//         // console.log("I am " + this.nom + " " + this.prenom)
//         console.log(`I am ${this.nom} ${this.prenom}`)
//     }
// }

// const stagiare2 = new Stagiare("Mahfoud", "Anass", "19" ,"dev")
// // // let objectName = new ClassName("","","","") creates an object 
// // // by default this object when created is empty
// console.log(stagiare2)
// console.log(stagiare2.age)
// console.log(stagiare2.branche)
// console.log(stagiare2.nom)
// console.log(stagiare2.prenom)
// console.log(stagiare2.presenterVous())
// // Access to properties values of an object
// const stagiare1 = {
//     nom: "Ouafik",
//     prenom: "Mohammed",
//     age :17,
//     branche : "dev",
//     presenterVous : function(){
//         console.log(' I am ' + this.nom + " " + this.prenom)
//     }
// }

// console.log(stagiare1.nom)
// console.log(stagiare1.branche)
// console.log(stagiare1.presenterVous())

function Achats(id , libelle  , prix , Qte ,Tva  )  {
    this.id = id,
    this.libelle = libelle,
    this.prix = prix,
    this.Qte =Qte,
    this.Tva =Tva,
    this.total = this.prix*this.Qte ,
    this.totalTTC = this.total + (this.total*this.Tva)
    this.CalculPrix = function (){
        console.log(`Prix Total de l'element d'ID ${this.id} de libelle ${this.libelle} est :${this.totalTTC}`)
    }
    this.CalculerPrix = function (){
        let TVA = 20/100
        let total = prix*Qte 
        let totalTTC = total + (total * TVA);
        return totalTTC;
    }
}


// // NEW OBJECT 
// const achats1 = new Achats('7158' , "t-shirst" , 500 , 2, 20/100)
// console.log(achats1.CalculerPrix())
// console.log(achats1.CalculPrix())
class Achat {
    constructor (id , article , prix  , qte){
        this.id = id,
        this.article = article,
        this.prix =  prix,
        this.qte = qte
    };
    CalculerTVA (){
        const TVA = 20/100
        let total = this.prix * this.qte ;
        let totalTTC = total + (total*TVA);
        return totalTTC;
    };
};
const achat1 =  new Achat (1 , "keyboard" , 300 , 5 )
const achat2 = new Achat(2 , "screen" , 1000 , 2)

console.log(achat1.CalculerTVA())
console.log(achat2.CalculerTVA())