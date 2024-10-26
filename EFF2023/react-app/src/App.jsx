import React from "react";
import Evenements from "./Components/Evenements";
import expertsData from "./Components/data";
import Experts1 from "./Components/Experts1";
import Experts2 from "./Components/Expert2";
import Formulaire from "./Components/Formulaire";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  const expert = expertsData[0]; // On prend le premier expert par exemple

  return (
    <Router>
      <div>
        <h1>Événements pour {expert.nom_complet}</h1>
        <Evenements evenements={expert.événements} />
        
      </div>
      <Routes>
        <Route path="/formulaire" element={<Formulaire />} />
        <Route path="/experts1" element={<Experts1 />} />
        <Route path="/experts2" element={<Experts2 />} />
      </Routes>
    </Router>
  );
};

export default App;
