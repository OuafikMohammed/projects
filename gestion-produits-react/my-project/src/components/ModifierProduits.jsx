import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ModifierProduits({ produits, setProduits }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [produit, setProduit] = useState(location.state.produit);
    const categories = location.state.categories;

    function handleSubmit() {
        const updatedProduits = produits.map(p => 
            p.id === produit.id ? produit : p
        );
        setProduits(updatedProduits);
        alert(`Produit ${produit.libelleProduit} a été modifié`);
        navigate('/');
    }

    return (
        <div className="max-w-sm mx-auto mt-20 bg-white rounded-md shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-blue-900 text-white">
                <h1 className="text-lg font-bold">Modifier Produit</h1>
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
                        readOnly
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
                        Quantité en Stock
                    </label>
                    <input
                        className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        value={produit.quantiteStock}
                        placeholder="Quantité en Stock"
                        onChange={(e) => setProduit({ ...produit, quantiteStock: e.target.value })}
                    />
                </div>

                <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
                    Modifier
                </button>
            </div>
        </div>
    );
}
