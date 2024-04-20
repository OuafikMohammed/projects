
function cssquery(element){
    return document.querySelector(element)
}


cssquery("#sub").addEventListener("click", (event) => {
    event.preventDefault();
    
    let Nom = cssquery('#nom').value;

    if (Nom === "") {
        cssquery('#nom').className = "fail";
        cssquery('#nom').style.display = 'block';
    } else {
        console.log(Nom); // Corrected line
        cssquery('#nom').className = 'fail';
        cssquery('#nom').style.display = 'block';
    }
});
