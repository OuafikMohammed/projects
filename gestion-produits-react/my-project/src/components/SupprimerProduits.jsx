import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SupprimerProduits({ produits, setProduits }) {
    const location = useLocation();
    const navigate = useNavigate();
    const produit = location.state?.produit;

    function handleDelete() {
        const updatedProduits = produits.filter(p => p.id !== produit.id);
        setProduits(updatedProduits);
        alert(`${produit.libelleProduit} a été supprimé`);
        navigate('/'); // Return to main products page after deletion
    }

    return (
        <div className="max-w-sm mx-auto mt-20 bg-white rounded-md shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-red-900 text-white">
                <h1 className="text-lg font-bold">Supprimer Produit</h1>
            </div>
            <div className="px-6 py-4">
                <p>Voulez-vous vraiment supprimer le produit <strong>{produit?.libelleProduit} d'id {produit?.id}</strong>?</p>
                <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 mt-4 rounded">
                    Supprimer
                </button>
            </div>
        </div>
    );
}