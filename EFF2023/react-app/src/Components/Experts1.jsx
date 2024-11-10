import React from "react";
import Expert from "./Expert"; // Importer le composant Expert
import expertsData from "./data"; // Importer les données

const Experts1 = ({experts = expertsData}) => {
  return (
    <div>
      <h1>Liste des experts</h1>
      <ul>
        {experts.map((expertx) => (
          <li key={expertx.id}>
            {/* Utiliser le composant Expert pour chaque expert */}
            <Expert expert={expertx} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experts1;
