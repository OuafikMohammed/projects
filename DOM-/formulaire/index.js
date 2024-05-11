const UserList = []

document.querySelector("#ajouter").addEventListener("click", function(e){
    e.preventDefault();
    let nom = document.querySelector("#nom").value;
    let prenom = document.querySelector("#prenom").value;
    let age = document.querySelector("#age").value;
    const UserInfo = {};
    UserInfo.noms = nom ;
    UserInfo.prenoms = prenom ;
    UserInfo.ages = age ;
    UserList.push(UserInfo); 
})


document.querySelector("#afficher").addEventListener("click" , (e) =>{
    e.preventDefault();
    console.log(UserList);
})
document.querySelector("#afficher").addEventListener("click",(e) =>{
    e.preventDefault();
    UserList.map((item,index,array) => {
    console.log(item);
    })
    let Fset = document.createElement("fieldset")
    let Legend = document.createElement("legend")
    Legend.innerHTML 
});
