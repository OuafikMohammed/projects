import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './index.css';
import Produits from './components/Produits';
import Ventes from './components/Ventes';
import ModifierProduits from './components/ModifierProduits'; 
import SupprimerProduits from './components/SupprimerProduits'; 

function App() {
  const [produits, setProduits] = useState([
    {
      id: 1,
      libelleProduit: "PC",
      categorie: { idCategorie: 5, libelle: "informatique" },
      prix: 5000,
      quantiteStock: 10
    }
  ]);
  const [ventes, setVentes] = useState([
    {
      id: produits[0].id,
      date: new Date().toLocaleString(),
      produit: {
        id: 1,
        libelleProduit: "PC",
        categorie: { idCategorie: 5, libelle: "informatique" },
        prix: 5000,
        quantiteStock: 10
      }
    }
  ]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Produits produits={produits} setProduits={setProduits} ventes={ventes} setVentes={setVentes}/>}></Route>
        <Route path="/ventes" element={<Ventes ventes={ventes} setVentes={setVentes}/>} />
        <Route path="/modifier" element={<ModifierProduits produits={produits} setProduits={setProduits} />} />
        <Route path="/supprimer" element={<SupprimerProduits produits={produits} setProduits={setProduits} />} /> 
      </Routes>
    </>
  );
}

export default App;
