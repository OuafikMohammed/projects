import React from "react";

const Expert = ({ expert }) => {
  return (
    <div>
      <h2>{expert.nom_complet}</h2>
      <ul>
        {expert.événements.map((event, index) => (
          <li key={index}>
            <strong>Thème :</strong> {event.thème} <br />
            <strong>Date de début :</strong> {event.date_debut} <br />
            <strong>Date de fin :</strong> {event.date_fin} <br />
            <strong>Description :</strong> {event.description} <br />
            <strong>Coût journalier :</strong> {event.cout_journalier} € <br />
            <strong>Durée :</strong> {event.durée} jours
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expert;
