let nom = 'ASSILA';
let prenom = 'RIHAB'
let nomComplet = nom + " " + prenom 

let fullName = `${nom} ${prenom}`

console.log(fullName)
console.log(nomComplet)


useEffect(function(){
    setCategories([{id:1, libelle:"Consommable"},
                    {id:2, libelle:"Non Consommable"},
                    {id:3, libelle:"Informatique"}
                    ])
}, []);

useEffect(function(){
    if (article.idCategorie == 3){
        setVisible(true)
    }else{
        setVisible(false)
    }
}, [article.idCategorie])

<select onChange={(e)=>setArticle({...article, idCategorie:e.target.value})} className="bg-green-200 border">
{categories.map(function(item){
    return <option key={item.id} value={item.id} >{item.libelle}</option>
})}  

</select>