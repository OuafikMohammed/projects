
    ////////////////////
    // Variables ///////
    ////////////////////

    /*let variable assignement */
    /* var variable declaration */

        // variable assignement
        let myVariable = 24 ;
        // Variable assignement
        let Anothervariable = "Hello,world !" ;
        // constant (unchangeable)
        const pi = 3.14
        //example
        nombreun = 16;
        nombredeux  = 10;
        somme = nombreun + nombredeux ;
    ////////////////////
    // Data types //////
    // EX1 /////////////
    ////////////////////
    let num =40 //number
    let greeting = "hello"      //string
    let valueX = true           //boleen
    let array = [1,2,3]         //array
    let myObject = {            //Object
        key1 : "firstvalue" ,
        key2 : "anothervalue"
    }
    // EX2 /////////////
    var a = null;
    var b ;

    console.log(typeof a ); //OBJECT
    console.log(typeof b); // UNDEFINED
    //////////////////////
    ///// Les fonctions //
    //////////////////////
        /////////////////////////////
        ///// Procedure (ORIGIN) ////
        function greet () {
            console.log("Hello world !")
        }
        function greet (name) {
            console.log ("Hellooo Mr" + name)
        }
        greet ("Ouafik Mohammed")
        /////////////////////////////
        /////// Fonctions ///////////    
        function sum (Value1,Value2) {
            return Value1 + Value2
        }
        ////////////////////////////
        function inscrire () {
            
            let nom = "Ouafik";
            let prenom = "samih";
            let age = 19 ;
            if (age == 19 ){
                let statut = etudiant
                console.log(age)
            }
        }
        inscrire()