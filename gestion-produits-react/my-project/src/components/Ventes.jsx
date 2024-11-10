import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Ventes({ ventes = [] }) {
    const navigate = useNavigate();
    const totalPrix = ventes.reduce((total, vente) => total + (vente.produit.prix * vente.produit.quantiteStock), 0);

    return (
        <div className="max-w-2xl mx-auto mt-20 bg-white rounded-md shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-green-900 text-white">
                <h1 className="text-lg font-bold">Liste des Ventes</h1>
            </div>
            <div className="px-6 py-4">
                {ventes.map((vente) => (
                    <div key={vente.id} className="mb-4 border-b pb-4">
                        <p><strong>ID:</strong> {vente.id}</p>
                        <p><strong>Date:</strong> {vente.date}</p>
                        <p><strong>Produit:</strong> {vente.produit.libelleProduit}</p>
                        <p><strong>Catégorie:</strong> {vente.produit.categorie.libelle}</p>
                        <p><strong>Prix:</strong> {vente.produit.prix}</p>
                        <p><strong>Quantité en Stock:</strong> {vente.produit.quantiteStock}</p>
                        <p><strong>Prix Total:</strong> {vente.produit.prix * vente.produit.quantiteStock}</p>
                    </div>
                ))}
                <div className="mt-4">
                    <p><strong>Prix Total de Tous les Produits:</strong> {totalPrix}</p>
                </div>
                <button onClick={() => navigate('/')} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
                    Retour aux Produits
                </button>
            </div>
        </div>
    );
}