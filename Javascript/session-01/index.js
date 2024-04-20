
    // ////////////////////
    // // Variables ///////
    // ////////////////////

    // /*let variable assignement */
    // /* var variable declaration */

    //     // variable assignement
    //     let myVariable = 24 ;
    //     // Variable assignement
    //     let Anothervariable = "Hello,world !" ;
    //     // constant (unchangeable)
    //     const pi = 3.14
    //     //example
    //     nombreun = 16;
    //     nombredeux  = 10;
    //     somme = nombreun + nombredeux ;
    // ////////////////////
    // // Data types //////
    // // EX1 /////////////
    // ////////////////////
    // let num =40 //number
    // let greeting = "hello"      //string
    // let valueX = true           //boleen
    // let array = [1,2,3]         //array
    // let myObject = {            //Object
    //     key1 : "firstvalue" ,
    //     key2 : "anothervalue"
    // }
    // // EX2 /////////////
    // var a = null;
    // var b ;

    // console.log(typeof a ); //OBJECT
    // console.log(typeof b); // UNDEFINED
    // //////////////////////
    // ///// Les fonctions //
    // //////////////////////
    //     /////////////////////////////
    //     ///// Procedure (ORIGIN) ////
    //     function greet () {
    //         console.log("Hello world !")
    //     }
    //     function greet (name) {
    //         console.log ("Hellooo Mr" + name)
    //     }
    //     greet ("Ouafik Mohammed")
    //     /////////////////////////////
    //     /////// Fonctions ///////////    
    //     function sum (Value1,Value2) {
    //         return Value1 + Value2
    //     }
    //     ////////////////////////////
    //     function inscrire () {
            
    //         let nom = "Ouafik";
    //         let prenom = "samih";
    //         let age = 19 ;
    //         if (age == 19 ){
    //             let statut = etudiant
    //             console.log(age)
    //         }
    //     }
    //     inscrire()
    function countOccurrences(arr, target) {
        return arr.filter(function(element) {
            return element === target
        }).length;
    }
   console.log(countOccurrences([0,1,2,5,2,5,5],5))
   let tableau1 = ['a','a','c','a','a']

   console.log(tableau1.indexOf('c'))
   console.log(tableau1.length)
   const diffa = tableau1.findIndex( item => item !="a")
   console.log(diffa)

//    function sum(array) {
//         let add = 0;
//         for (let elem of array){   
//             add += elem
//         }
//         return add
//    }
   console.log(sumNumbers([5,7,8]))

//    function sumNumbers(numbers) {
//     let sum = 0;
//     for (let element of numbers) {
//         sum += element;
//     }
//     return sum;
// }
// function sumNumbers(numbers) {
//     let sum = 0;
//     for (let index in  numbers) {
//         sum += numbers[index];
//     }
//     return sum;
// }
function sumNumbers(numbers) {
    let sum = 0;
    numbers.map(number => sum += number);
    return sum;
}
function calculateOccurences (array,target){
    let occurence =0 ;
    array.forEach((elem)=>{
        if (elem === target){
            occurence += 1
    }})
    return occurence
}
function avgArray (numbers){
    return sumNumbers(numbers)/numbers.length
}
console.log(avgArray([10,10,10]))
console.log(calculateOccurences([5,5,9,5],5))