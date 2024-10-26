import React, { useState, useEffect } from 'react';

const Experts2 = () => {
  const [experts, setExperts] = useState([]);

  // Fonction pour récupérer les données depuis l'API
  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const response = await fetch('https://api.example.com/experts'); // Remplacer par l'URL de l'API réelle
        const data = await response.json();
        setExperts(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchExperts();
  }, []); // Le tableau vide [] assure que la fonction est exécutée une seule fois lors du montage

  return (
    <div>
      <h2>Liste des Experts</h2>
      <ul>
        {experts.map((expert) => (
          <li key={expert.id}>
            {expert.nom_complet}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experts2;
