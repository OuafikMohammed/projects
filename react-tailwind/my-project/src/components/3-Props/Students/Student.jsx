import React from "react";
// function Student({nom,prenom}){
//     return (
//         <>
//             <div style={{backgroundColor:props.color,display:'flex',justifyContent:'center',textAlign:'center'}}>
//                 <h1 className="text-center text-gray-600">Nom : {.nom}</h1>
//                 <h1 className="text-center text-gray-600">prenom : {prenom}</h1>
//                 <br />
//             </div>
            
//         </>
//     )
// }
// IT's common to destructure values for cleaner code
function Student(props){
    return (
        <>
            <div style={{backgroundColor:props.color,display:'flex',justifyContent:'center',textAlign:'center'}}>
                <h1 className="text-center text-gray-600">Nom : {props.nom}</h1>
                <h1 className="text-center text-gray-600">prenom : {props.prenom}</h1>
                <br />
            </div>
            
        </>
    )
}
export default Student