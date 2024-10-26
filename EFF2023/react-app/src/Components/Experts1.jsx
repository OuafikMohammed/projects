import React from "react";
import Expert from "./Expert"; // Importer le composant Expert
import expertsData from "./data"; // Importer les données

const Experts1 = () => {
  return (
    <div>
      <h1>Liste des experts</h1>
      <ul>
        {expertsData.map((expert) => (
          <li key={expert.id}>
            {/* Utiliser le composant Expert pour chaque expert */}
            <Expert expert={expert} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experts1;
