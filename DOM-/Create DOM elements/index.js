/*preventdefault is used to stop the default we use it in forms */ 
/*prepend create in the first child element */
/*append creates in the last element*/
/*  !!!!!!!!!!!!!!!!!!!!!!!!!!!!
    getElementsByClassName is used for loops 
    getElementsByTagName is used for loops 
*/
document.querySelector(".creer-titre").addEventListener("click", function(){
    const parent = document.querySelector(".section-1");
    const titre = document.createElement("h1");
    titre.innerHTML = "This is a title";
    titre.style.color="blue";
    titre.style.backgroundColor="green";
    parent.append(titre)
})

document.querySelector("button").style.color="gold" ;
document.querySelector("button").style.border= " 2px solid " ;
document.querySelector(".section-1").style.textAlign ="center" ;
document.querySelector(".deletethiselement").addEventListener("click",function(){
    const removethis =document.querySelector("h1");
    removethis.remove();
})

document.querySelector(".btn-remplacer").addEventListener("click",function(){
    const parent = document.querySelector(".section-1");
    const ancElement = document.querySelector(".paragraph-1");
    const nouvElement = document.querySelector(".titre-1");

    parent.replaceChild(nouvElement,ancElement)
});

document.querySelector(".btn-creer-conteneur").addEventListener("click", function(){
    const vConteneur = document.createElement("div")
    vConteneur.classList.add("container")
    vConteneur.classList.add("encadrer")
    /* classList 
       className  */
    document.body.append(vConteneur)
    //set attribute
    vConteneur.setAttribute("id" , "conteneur")

    document.querySelector(".titre").setAttribute("id","monTitre")
})