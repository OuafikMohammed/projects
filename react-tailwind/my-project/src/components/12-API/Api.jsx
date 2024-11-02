import { useEffect ,useState } from "react";
function Produits (){
    const [produits ,setProduits] = useState([]);
    useEffect(function(){
        fetch("url").then((response)=>{
            return response.json();
        }).then((data)=>{
            setProduits(data);
            console.log(data)
        })
    },[])
}