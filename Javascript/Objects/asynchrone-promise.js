// // consommateur est getData().then(function)
// // const stagiaires = getData().then(function)
// // .then is used in callbackfunct
// let stagiaire2 =[]
// let stagiairesNotesListe;
// getData()
//         .then((response)=>{
//             console.log(response);
//             return getNotes()
//         }).then(function(response){
//             stagiairesNotesListe = response;
//             console.log(stagiairesNotesListe);
//         })
//         //resolve
//         .catch(function(error){
//             console.log(error)
//         })
//         .finally(function(){
//             console.log("finally !")
//         })
//         //reject
// // producteur de promise


// function getData(){
//     let found = true
//     return new Promise(function(resolve,reject){
//         if (found === true){
//             let stagiairesnames = ["ELKADIRI" , "FEYD" , "ELBATOULI"]
//             resolve(stagiairesnames);
//         }else{
//             reject("rejected")
//         }
//     });
// };


// function getNotes (){
//     let stagiairesNotesListe = [{idStagire :1 , module:"JAVASCRIPT" , note : "15"},
//         {idStagire :1 , module:"HTML" , note : "14"},
//         {idStagire :1 , module:"POO" , note : "18"},
//         {idStagire :2 , module:"JAVASCRIPT" , note : "14"},
//         {idStagire :2 , module:"HTML" , note : "16"},
//         {idStagire :2 , module:"POO" , note : "18"},
//         {idStagire :3 , module:"JAVASCRIPT" , note : "14"},
//         {idStagire :3 , module:"HTML" , note : "15"},
//         {idStagire :3 , module:"POO" , note : "17"},
//         ]
//     return new Promise(function(resolve,reject){
//         resolve(stagiairesNotesListe)
//     });
// };
// document.querySelector("#afficher-note").addEventListener("click",function(){
//     stagiaire2 = stagiairesNotesListe.filter((itemValue)=>{
//         return itemValue.idStagire === 2;
//     });

//     console.log(stagiaire2)
// });
document.querySelector("#afficher-dog").addEventListener("click",function(){
    let dogA = fetch("https://dog.ceo/api/breeds/image/random").then(function(response){
        console.log(response)
        return response.json()
    })
    console.log(dogA)
})


//   async function msg() {
//     const msg = await helloWorld();
//     console.log('Message:', msg);
//   }
//   msg();

function helloWorld() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello World written !');
      }, 2000);
    });
  }

async function trythiscode(){
    try{
        const msg = await helloWorld();
        console.log('Message:', msg);
        if(msg){
            throw new Error('erreur ici !')
        }
    }catch(error){
        console.log(error)
    }finally{
        console.log("finallllllllllly !")
    }
  }
trythiscode();