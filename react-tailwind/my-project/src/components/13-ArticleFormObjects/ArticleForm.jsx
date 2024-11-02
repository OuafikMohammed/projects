import { useEffect, useState } from "react"
function ArticleForm(){
    const [article, setArticle] = useState({
                                               id:"",
                                               designation:"",
                                               idCategorie:"",
                                               quantite:"",
                                               prix:"" 
                                            })
    const [articles, setArticles] = useState([])
    const [categories, setCategories] = useState([]) 
    //const [visible, setVisible] = useState(false)
    const [prixCouleur, setPrixCouleur] = useState('bg-green-200 border')

    function handleAjouter(){
        setArticles([...articles, {...article}])
    }

    let sommeTotal = 0;

    function supprimer() {
        const newArticles = articles.filter((item) => {
            return item.id !== article.id;
        })

        setArticles(newArticles);
    }

    function modifier() {
        const newArticles = articles.map(function(item){
            if(item.id === article.id) {
                item = {...article};
            }
            return item;
        })
        setArticles(newArticles);
    }

    //Cycle de vie d'un composant 
    // Rendered once
    useEffect(function(){
        setCategories([{id:1, libelle:"Consommable"},
                        {id:2, libelle:"Non Consommable"},
                        {id:3, libelle:"Informatique"}
                        ])
    }, [])

    //Change the color just after article.idCategorie changed
    useEffect(function(){
        if(article.idCategorie == 1){
            setPrixCouleur("bg-blue-300 border")
        }else if(article.idCategorie == 2){
            setPrixCouleur("bg-green-200 border")
        }else if(article.idCategorie == 3){
            setPrixCouleur("bg-red-200 border")
        }
    }, [article.idCategorie])
    

    return (
        <>
            <fieldset className="table-container p-4">
            <legend>Nouvelle ligne</legend>
                <div className="form-row">
                    <label htmlFor="id">ID :</label>
                    <input type="text" value={article.id} name="id" className="bg-gray-50 w-48 border" 
                    onChange={(e)=>setArticle({...article, id:e.target.value})} />
                </div>
                <div className="form-row">
                    <label htmlFor="designation">Designation :</label>
                    <input type="text" value={article.designation} name="designation"  className="bg-gray-50 w-48 border" 
                    onChange={(e)=>setArticle({...article, designation:e.target.value})} />
                </div>
                
                <div className="form-row">
                    <label htmlFor="quantite">Quantité :</label>
                    <input type="text" value={article.quantite} name="quantite" className="bg-gray-50 w-48 border"  
                    onChange={(e)=>setArticle({...article, quantite:e.target.value})} />
                    
                </div>

                <div className="form-row">
                    <label htmlFor="prix">Prix :</label>
                    <input type="text" value={article.prix} name="prix" className="bg-gray-50 w-48  border"
                    onChange={(e)=>setArticle({...article, prix:e.target.value})} />
                </div>

                <div className="form-row">
                    <label htmlFor="prix">Catégorie :</label>
                    <select value={article.idCategorie} onChange={(e)=>setArticle({...article, idCategorie:e.target.value})} className="bg-gray-50 w-48 h-7 border">
                        {categories.map(function(item){
                            return (<option value={item.id}>{item.libelle}</option>)
                        })}                        
                    </select>
                </div>

                <div>
                    <button id="ajouter" onClick={handleAjouter} >Ajouter</button>
                </div>
            </fieldset>

            <div className="table-container">
                <h1>Liste des article</h1>
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Désignation</th>
                            <th>Catégorie</th>
                            <th>Quantité</th>
                            <th>Prix</th>
                            <th>Prix total</th>
                        </tr>
                    </thead>
                    <tbody id="tdata"   >
                        {
                            articles.map((item, index) => {
                                let prixTotal = Number(item.prix) * Number(item.quantite);
                                sommeTotal += prixTotal;
                                let coleurQuantite = "black";

                                if(item.quantite < 5) {
                                    coleurQuantite = "red";
                                } else if (item.quantite >= 5 && item.quantite <20) {
                                    coleurQuantite = "blue";
                                } else if (item.quantite >= 20) {
                                    coleurQuantite = "green";
                                }

                                return(
                                    <tr key={index} onClick={()=>setArticle({...item})} className={`hover:bg-red-300 cursor-pointer ${item.id === article.id ? "bg-red-300" : "bg-white" } `} tabIndex={1}>
                                        <th>{item.id}</th>
                                        <td>{item.designation}</td>
                                        <td>{item.idCategorie}</td>
                                        <td className="note" style={{color:coleurQuantite}}>{item.quantite}</td>
                                        <td>{item.prix}</td>
                                        <td>{prixTotal}</td>                                        
                                    </tr>
                                );
                            })
                        }                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="2" id="best">Prix total :</th>
                            <td id="best-note" colSpan="3">{sommeTotal}</td>
                        </tr>
                    </tfoot>
                </table>
                <div className="py-3">
                    <button className="btn-supprimer bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md" onClick={supprimer}>Supprimer</button>
                    <button className="btn-modifier" onClick={modifier}>modifier</button>
                </div>
            </div>
        </>
    )
}

export default ArticleForm