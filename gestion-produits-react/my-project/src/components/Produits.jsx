import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Produits({ produits, setProduits ,ventes,setVentes}) {
    const [categories, setCategories] = useState([]);
    const [produit, setProduit] = useState({
        id: '',
        libelleProduit: '',
        categorie: { idCategorie: '', libelle: '' },
        prix: '',
        quantiteStock: ''
    });
    const [selectedProduit, setSelectedProduit] = useState(null);
    const navigate = useNavigate(); 
    
    useEffect(() => {
        const newCategories = [
            { idCategorie: 1, libelle: "Electronique" },
            { idCategorie: 2, libelle: "Vêtements" },
            { idCategorie: 3, libelle: "Alimentation" },
            { idCategorie: 4, libelle: "Jouets" }
        ];
        setCategories(newCategories);
    }, []);

 
    function Ajouter() {
        if (!produit.id || !produit.libelleProduit || !produit.categorie.idCategorie || !produit.prix || !produit.quantiteStock) {
            alert("Veuillez remplir tous les champs");
            return;
        }

        if (produits.find(p => p.id === produit.id)) {
            alert("Un produit avec cet ID existe déjà");
            return;
        }

        const updatedProduits = [...produits, produit];
        setProduits(updatedProduits);

        const vente = {
            id: produit.id,
            date: new Date().toLocaleString(),
            produit: { ...produit }
        };
        setVentes([...ventes, vente]);

        setProduit({
            id: '',
            libelleProduit: '',
            categorie: { idCategorie: '', libelle: '' },
            prix: '',
            quantiteStock: ''
        });
    }

    return (
        <>
            {/* Product Form */}
            <div className="max-w-sm mx-auto mt-20 bg-white rounded-md shadow-md overflow-hidden">
                <div className="px-6 py-4 bg-gray-900 text-white">
                    <h1 className="text-lg font-bold">Ajouter un Produit</h1>
                </div>
                <div className="px-6 py-4">
                    {/* ID Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            ID
                        </label>
                        <input
                            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name='id'
                            value={produit.id}
                            type="number"
                            placeholder="ID"
                            onChange={(e) => {
                                setProduit({
                                    ...produit,
                                    id: e.target.value
                                })
                            }}
                        />
                    </div>

                    {/* Libelle Produit Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Libellé Produit
                        </label>
                        <input
                            name='libelleProduit'
                            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={produit.libelleProduit}
                            type="text"
                            placeholder="Nom du Produit"
                            onChange={(e) => {
                                setProduit({
                                    ...produit,
                                    libelleProduit: e.target.value
                                })
                            }}
                        />
                    </div>

                    {/* Catégorie Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Catégorie
                        </label>
                        <select
                            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={produit.categorie.idCategorie}
                            onChange={(e) => {
                                const selectedCategory = categories.find(cat => cat.idCategorie === parseInt(e.target.value));
                                setProduit({
                                    ...produit,
                                    categorie: selectedCategory 
                                });
                            }}
                        >
                            <option value="">Sélectionner catégorie</option>
                            {categories.map((categorie) => (
                                <option key={categorie.idCategorie} value={categorie.idCategorie}>
                                    {categorie.libelle}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Prix Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Prix
                        </label>
                        <input
                            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            value={produit.prix}
                            placeholder="Prix"
                            onChange={(e) => setProduit({ ...produit, prix: e.target.value })}
                        />
                    </div>

                    {/* Quantité Stock Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Quantité Stock
                        </label>
                        <input
                            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            value={produit.quantiteStock}
                            placeholder="Quantité en Stock"
                            onChange={(e) => setProduit({ ...produit, quantiteStock: e.target.value })}
                        />
                    </div>

                    {/* Ajouter Button */}
                    <button
                        type="button"
                        onClick={Ajouter}
                        className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Ajouter
                    </button>
                </div>
            </div>

            {/* Product List Table */}
            <div className="flex flex-col mt-8 mx-auto max-w-4xl">
                <div className="overflow-x-auto">
                    <div className="py-2 inline-block min-w-full">
                        <div className="overflow-hidden">
                            <table className="min-w-full border">
                                <thead className="border-b bg-gray-200">
                                    <tr>
                                        <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">ID</th>
                                        <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Libellé</th>
                                        <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Catégorie</th>
                                        <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Prix</th>
                                        <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Quantité</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {produits.map((item, index) => (
                                        <tr
                                            key={index}
                                            className={`border-b cursor-pointer ${selectedProduit?.id === item.id ? 'bg-gray-300' : ''}`}
                                            onClick={() => setSelectedProduit(item)} // Set selected product on row click
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.libelleProduit}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.categorie.libelle}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.prix}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.quantiteStock}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-4 md:grid-cols-5 p-2 mt-4 mx-auto max-w-4xl">
                <button
                    onClick={Ajouter}
                    className="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-green-600 bg-green-500 hover:bg-green-400 rounded"
                >
                    Ajouter
                </button>
                <button
                    onClick={() => selectedProduit && navigate('/modifier', { state: { produit: selectedProduit ,categories } })}
                    className="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-blue-600 bg-blue-500 hover:bg-blue-400 rounded"
                    disabled={!selectedProduit}
                    //??
                >
                    Modifier
                </button>
                <button
                    onClick={() => selectedProduit && navigate('/supprimer', { state: { produit: selectedProduit } })}
                    className="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-red-600 bg-red-500 hover:bg-red-400 rounded"
                    disabled={!selectedProduit}
                    // ??
                >
                    Supprimer
                </button>
                <button onClick={() => navigate('/ventes')}
                        className="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-red-600 bg-red-500 hover:bg-red-400 rounded"
                >
                        Voir les Ventes
                </button>
            </div>
        </>
    );
}
