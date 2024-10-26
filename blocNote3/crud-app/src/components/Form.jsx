import { useEffect, useState } from "react";
import axios from 'axios';
export default function Form(){
    const [id ,setId]=useState();
    const [designation,setDesignation]=useState("");
    const [quantite,setQuantite]=useState(0);
    const [prix,setPrix]=useState(0);
    const [articles,setArticles]=useState([]);
    const [category , setCategory] =useState("")
    const [categories , setCategories]=useState([]);
    const [gender ,setGender] =useState("");
    const [isFeatured ,setIsFeatured]= useState(false);
    const [searchTerm, setSearchTerm] = useState("");  
    const [searchResults, setSearchResults] = useState([]);

    function handleSave(){
        setArticles([...articles,
                        {id:id,
                        designation:designation,
                        quantite:quantite,
                        prix:prix,
                        category:category,
                        gender:gender,
                        isFeatured:isFeatured,
                        }
                    ]);
        clearForm();
    }
    function handleUpdate(){
        let newArticles = articles.map((article)=>{
            if (article.id === id){
                article.desigantion = designation
                article.quantite = quantite
                article.prix = prix
                article.gender = gender
                article.isFeatured = isFeatured
            }
            return article;
        })
        setArticles([...newArticles]);
        clearForm();
    }
    function clearForm(){
        setId("");
        setDesignation("");
        setQuantite(0);
        setPrix(0);
        setGender("");
        setIsFeatured(false);
    }
    useEffect(()=>{
        const fetchedCategories =[
            { id: 1, name: "Electronics" },
            { id: 2, name: "Books" },
            { id: 3, name: "Clothing" },
            { id: 4, name: "Furniture" },
        ];
        setCategories(fetchedCategories);
    },[]);
    const handleSearch = () => {
        axios
            .get(`http://localhost:5000/api/search?q=${searchTerm}`)
            .then((response) => {
                setSearchResults(response.data);
            })
            .catch((error) => {
                console.error("Error fetching search results", error);
            });
    };
    return (
        <>  
            <div className="w-full max-w-lg mx-auto bg-black p-8 rounded-lg shadow-md mt-20">
                <div>
                    <label className="block text-white text-sm">Search:</label>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-3 py-2 mb-4 border rounded-lg"
                        placeholder="Search by designation"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded"
                    >
                        Search
                    </button>
                </div>

                {/* Display Search Results */}
                <div className="mt-6">
                    {searchResults.map((article) => (
                        <div key={article.id} className="bg-white p-4 mb-4 rounded-lg shadow-md">
                            <h4 className="font-bold">{article.designation}</h4>
                            <p>Quantity: {article.quantite}</p>
                            <p>Price: {article.prix}</p>
                        </div>
                    ))}
                </div>
            </div>
            <main className="w-full max-w-lg mx-auto bg-black p-8 rounded-lg shadow-md border border-gray-300 mt-20">
            <h2 className="text-2xl font-bold mb-6 text-white">Add A New Note</h2>
            
            <div className="mb-4">
                <label htmlFor="id" className="block text-gray-200 mb-2">ID</label>
                <input 
                id="id" 
                type="text" 
                onChange={(e) => setId(e.target.value)} 
                value={id} 
                className="w-full px-4 py-2 rounded-md border border-gray-500 bg-gray-800 text-white focus:ring-2 focus:ring-green-500"
                />
            </div>
            
            <div className="mb-4">
                <label htmlFor="designation" className="block text-gray-200 mb-2">Designation</label>
                <input 
                id="designation" 
                type="text" 
                onChange={(e) => setDesignation(e.target.value)} 
                value={designation} 
                className="w-full px-4 py-2 rounded-md border border-gray-500 bg-gray-800 text-white focus:ring-2 focus:ring-green-500"
                />
            </div>
            
            <div className="mb-4">
                <label htmlFor="quantite" className="block text-gray-200 mb-2">Quantité</label>
                <input 
                id="quantite" 
                type="text" 
                onChange={(e) => setQuantite(e.target.value)} 
                value={quantite} 
                className="w-full px-4 py-2 rounded-md border border-gray-500 bg-gray-800 text-white focus:ring-2 focus:ring-green-500"
                />
            </div>
            
            <div className="mb-4">
                <label htmlFor="prix" className="block text-gray-200 mb-2">Prix</label>
                <input 
                id="prix" 
                type="text" 
                onChange={(e) => setPrix(e.target.value)} 
                value={prix} 
                className="w-full px-4 py-2 rounded-md border border-gray-500 bg-gray-800 text-white focus:ring-2 focus:ring-green-500"
                />
            </div>
            {/* Dropdown for categories */}
            <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="category">
                        Category
                    </label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.name}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                     {/* Gender Radio Buttons */}
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">Gender</label>
                        <div>
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                                onChange={(e) => setGender(e.target.value)}
                                checked={gender === "male"}
                                className="mr-2"
                            />
                            <label htmlFor="male" className="text-white mr-4">Male</label>

                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"
                                onChange={(e) => setGender(e.target.value)}
                                checked={gender === "female"}
                                className="mr-2"
                            />
                            <label htmlFor="female" className="text-white">Female</label>
                        </div>
                        <div className="text-white mb-4 mt-1">
                            
                            <input
                                type="checkbox"
                                checked={isFeatured}
                                onChange={(e) => setIsFeatured(e.target.checked)}
                                className="mr-2"
                                value="isFeatured"
                            />
                            IsFeatured
                        </div>
                        

                    </div>
                </div>
                <div className="flex justify-between mt-6">
                    <button 
                            type="button" 
                            onClick={handleSave} 
                            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                        >
                            Save
                        </button>

                        <button 
                            type="button" 
                            onClick={handleUpdate} 
                            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                            Update
                    </button>
                </div>

        </main>
        <div>{articles.map((article)=>{
            return(
                <div key={article.id} className="flex justify-between items-start space-x-4">
                    <div className="overflow-x-auto w-3/4">
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="text-left py-3 px-4 font-medium text-gray-600">ID</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-600">Designation</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-600">Quantity</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-600">Price</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-600">Category</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-600">Gender</th>
                                    <th className="text-left py-3 px-4 font-medium text-gray-600">Featuring</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-t text-left py-3 px-4">{article.id}</td>
                                    <td className="border-t text-left py-3 px-4">{article.designation}</td>
                                    <td className="border-t text-left py-3 px-4">{article.quantite}</td>
                                    <td className="border-t text-left py-3 px-4">{article.prix}</td>
                                    <td className="border-t text-left py-3 px-4">{article.category}</td>
                                    <td className="border-t text-left py-3 px-4">{article.gender}</td>
                                    <td className="border-t text-left py-3 px-4">{article.isFeatured ? "Yes" : "No"}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                        <button
                            onClick={() => {
                                setId(article.id);
                                setDesignation(article.designation);
                                setPrix(article.prix);
                                setCategory(article.category);
                            }}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Editer
                        </button>
                        <button
                            onClick={() => {
                                const newArticles = articles.filter((item) => item.id !== article.id);
                                setArticles([...newArticles]);
                            }}
                            className="text-red-600"
                        >
                            Supprimer
                        </button>
                    </div>
                </div>
            )
        })}</div>
        </>
    )
}
