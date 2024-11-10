import React, { useState } from 'react';

const Formulaire = () => {
  // State pour stocker les données saisies
  const [evenement, setEvenement] = useState({
    theme: '',
    date_debut: '',
    date_fin: '',
    cout_journalier: '',
    expert: ''
  });

  const [affichage, setAffichage] = useState(false); // Pour gérer l'affichage après la soumission

  // Fonction pour gérer le changement des valeurs du formulaire
  const handleChange = (e) => {
    setEvenement({...evenement,[e.target.name]: e.target.value});
  };

  // Fonction pour afficher les informations saisies
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page
    setAffichage(true); // Activer l'affichage des données
  };

  return (
    <div>
      <h2>Ajouter un Événement</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Thème de l'événement:</label>
          <input
            type="text"
            name="theme"
            value={evenement.theme}
            // working with names to handle Change
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date de début:</label>
          <input
            type="date"
            name="date_debut"
            value={evenement.date_debut}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date de fin:</label>
          <input
            type="date"
            name="date_fin"
            value={evenement.date_fin}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Coût journalier (€):</label>
          <input
            type="number"
            name="cout_journalier"
            value={evenement.cout_journalier}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Expert:</label>
          <input
            type="text"
            name="expert"
            value={evenement.expert}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Confirmer</button>
      </form>

      {/* Affichage des données après soumission */}
      {affichage && (
        <div>
          <h3>Informations Saisies</h3>
          <p><strong>Thème:</strong> {evenement.theme}</p>
          <p><strong>Date de début:</strong> {evenement.date_debut}</p>
          <p><strong>Date de fin:</strong> {evenement.date_fin}</p>
          <p><strong>Coût journalier:</strong> {evenement.cout_journalier} €</p>
          <p><strong>Expert:</strong> {evenement.expert}</p>
        </div>
      )}
    </div>
  );
};

export default Formulaire;
