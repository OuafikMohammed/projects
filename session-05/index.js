let vDate = new Date().getDate();

let jour ;4

switch (vDate){
    case 0:
        jour= "Dimanche"
    
    case 1:
        jour= "Lundi"

    case 2:
        jour= "Mardi"

    case 3:
        jour= "Mercredi"

    case 4:
        jour= "Jeudi"
    
    case 5:
        jour= "Vendredi"

    case 6:
        jour= "Samedi"

    case 7:
        jour= "Dimanche"
}
let abbreviation= "WD"
let branche ;
switch(abbreviation){
    case "DD":
    branche = "Développement digitale"
    case "ID":
    branche = "Infrastructure digitale"
    case "WD" :
    branche = "Web design"
}
console.log("La branche est le :",branche)
/*###################################################################*/
jours= ["lundi" , "mardi" , "mercredi" , "jeudi" , "vendredi " , "Samedi " , "Dimache"]
for (i=0 ; i<=6 ; i++){
    console.log(jours[i])
}
for (item in jours){
    console.log(jours[i]);
}
for (jr of jours){
    console.log(jr);
}
/* JIT compilation*/
let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);


 
function myFunction(item, index) {
  text += index + ": " + item + "\n"; 
}
console.log(text);

/*La declaration continue */

for (let i = 0 ; i <10 ; i++)
{
    if (i === 3 ) { continue ;
    text += "The number is " + i + "\n";}
}
console.log(text)

n = n - 1
}
while (n >= 0)
for s