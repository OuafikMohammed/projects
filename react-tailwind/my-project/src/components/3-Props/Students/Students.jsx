import React from "react"
import Student from "./Student"
function Students(){
    const students = [
        {id:1, nom:'TAHER', prenom:'ILYAS',color:'#A70FF4'},{id:2,nom:'HALOUI',prenom:'ADAM',color:'#5555'},{id:3,nom:'SAYADI',prenom:'MED AMINE',color:'yellow'}
    ]
    const student1 = students.find((item)=>{
        return item.id === 1;    
    });
    console.log(student1)
    return (
        <>
            
            {
                // students.map((item,index)=>{
                    // return <Student key={index} nom={item.nom} prenom={item.prenom} color={item.color}/>
                    // return (
                        <Student nom={student1.nom} prenom={student1.prenom} color={student1.color}/>
                    // )
                // })
            }
        </>
    ) 
}
export default Students
//Echangement entre les données ou les proprites d'un composant comme le style
