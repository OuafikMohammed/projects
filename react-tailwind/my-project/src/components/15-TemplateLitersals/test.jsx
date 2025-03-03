// export default function TemplateLiterals(){
//  const salutations="Salut" ;
//  const nom = "Rami" ;
//  const className ="bg-red-400" ;
//  return (
//     <div className='App'>
//         <button className={` ${className} `}>{`Hello =  ${salutations} , ${nom}`}</button>
//     </div>
//  );
// }
import React , {useState} from "react";
export default function TemplateLiterals(){
    const diplomes=['bac','technicien','technicien , specialisé','licence','master'];
    const salutations="salut";
    const nom="Rami" ;
    const [current,setCurrent]=useState(0);
    return (
            <>
                <div>
                    <h1>
                        {`${salutations} ${nom}`}
                    </h1>
                    <ul>
                        {diplomes.map((diplome,i)=>{
                            let className ='';
                            if(current===i){className='bg-red-500'}else{className='class1'}
                                 return (<li className={`${className}`} key={diplome} onClick={()=>setCurrent(i)}>{diplome}</li>)
                        })} 
                    </ul>
                </div>
            </>
    )                    
}