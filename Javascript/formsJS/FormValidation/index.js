function cssquery(query){
       return document.querySelector(query)
    }
    // DONE !
    cssquery('#sub').addEventListener("click" , (e) => {
        e.preventDefault();
        let Username = cssquery('#username').value
        let Email = cssquery('#email').value
        let Password = cssquery('#password').value
        let cPassword = cssquery('#confirm').value
        // Variables used to concatenate error 
        // <4
        errorsize = false
        let errormessage1 ="" ;
        // error message is declared empty
        // matchingpasswords
        errormatching = false
         let errormessage2="" ;
        // Password Validation
        if (Password == cPassword && Password.length >4){
            cssquery('#password').className='success'
            cssquery('#confirm').className='success'
            cssquery('#passworderror').style.display='none'
        } else if(Password.length < 4) {
            errorsize = true
            errormessage1 = 'is less than 4'    
        } else if(Password = "") {

        }else if(Password != cPassword){
            errormatching = true
            errormessage2 = "doesn't match"
        }
        if (errorsize == true || errormatching == true){
            cssquery('#password').className ='fail'
            cssquery('#confirm').className='fail'
            cssquery('#passworderror').innerHTML = 'The password ' + errormessage1 + " " + errormessage2
            cssquery('#passworderror').style.display = 'block'
        }
        var pattern = /^([a-zA-Z0-9]{5,})+@gmail.com/;

        var result = pattern.test(Email)
        
        if (result == true){
            document.querySelector("#email").className = "success"
            document.querySelector("#emailerror").style.display = "none"
    
        }else{
            document.querySelector("#email").className = "fail"
            document.querySelector("#emailerror").style.display = "block"
        }
        if (Username.length < 3){
            cssquery("#username").className = "fail"
            cssquery('#usernameerror').style.display = "block"
        } else {
            cssquery('#username').className = "success"
            cssquery('#usernameerror').style.display = "none"
        }
    })
    cssquery('#Reset').addEventListener("click" , (e) =>{
        e.preventDefault();
        cssquery('#username').className = 'none'
        cssquery('#email').className = 'none'
        cssquery('#password').className = 'none'
        cssquery('#confirm').className = 'none'
        cssquery('#usernameerror').style.display = 'none'
        cssquery('#emailerror').style.display = 'none'
        cssquery('#passworderror').style.display = 'none'
    })

    
// function cssquery(query){
//     return document.querySelector(query)
// }

// cssquery("#submit").addEventListener("click",(e) =>{
//     e.preventDefault()
//     let Username = cssquery('#username').value
//     let Email = cssquery('#email').value
//     let Password = cssquery('#password').value
//     let Confirm = cssquery('#confirm').value
//     /// Variables used to check condition

//     let bad = ""
//     let bad2 = ""
//     let badb = false;
//     let badb2 = false;
    

//     if(Password == Confirm && Password.length > 4){
//         cssquery('#password').className = "success"
//         cssquery('#confirm').className = "success"
//         cssquery('#passworderror').style.display = "none"

//     }else if (Password != Confirm){
//         badb = true;
//         bad = "doesn't match"
//     }
//     if(Password.length <= 4){
//         badb2 = true;
//         bad2 = "is smaller than 4."

//     }

//     if (badb == true || badb2 == true){
//         cssquery('#password').className = 'fail'
//         cssquery('#confirm').className = 'fail'
//         cssquery('#passworderror').innerHTML = "The password " + bad2 + " "  + bad
//         // the password doesn't match is smaller than 4
        
//         cssquery('#passworderror').style.display = "block"
//     }
   

//     var pattern = /^([a-zA-Z0-9]{5,})+@gmail.com/;

//     var result = pattern.test(Email)



   



//     if (Username.length > 3 && Username.length < 25){
//         document.querySelector("#username").className = "success"
//         document.querySelector("#usernameerror").style.display = "none"
//     }else{
//         document.querySelector("#username").className = "fail"
//         document.querySelector("#usernameerror").style.display = "block"
//     }
//     cssquery("form").submit()
// }
// )

// cssquery("#Reset").addEventListener("click",(e) =>{
//     e.preventDefault();
    
//     cssquery('#password').className = ""
//     cssquery('#confirm').className = ""
//     cssquery('#username').className = ""
//     cssquery('#email').className = ""
//     cssquery('#password').className = ""
//     for ( para of document.querySelectorAll('p')){
//         para.style.display = "none"
//     }
//     cssquery("form").reset()

// })
