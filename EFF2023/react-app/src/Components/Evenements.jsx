import React from 'react';
// destructuring = tafkike
const Evenements = ({ evenements }) => {
    // Calculer le coût total pour chaque événement et le coût total global
    const calculerCoutTotal = (coutJournalier, duree) => coutJournalier * duree;
  
    const coutTotalGlobal = evenements.reduce((total, event) => {
      return total + calculerCoutTotal(event.cout_journalier, event.durée)
    },0)
  
    return (
      <div>
        <h2>Liste des événements</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Thème</th>
              <th>Date de début</th>
              <th>Date de fin</th>
              <th>Description</th>
              <th>Coût Journalier</th>
              <th>Durée (jours)</th>
              <th>Coût Total</th>
            </tr>
          </thead>
          <tbody>
            {evenements.map((event, index) => {
              const coutTotal = calculerCoutTotal(event.cout_journalier, event.durée);
              return (
                <tr key={index}>
                  <td>{event.thème}</td>
                  <td>{event.date_debut}</td>
                  <td>{event.date_fin}</td>
                  <td>{event.description}</td>
                  <td>{event.cout_journalier} €</td>
                  <td>{event.durée}</td>
                  <td>{coutTotal} €</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="6">Coût total des événements</td>
              <td>{coutTotalGlobal} €</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  };
  
  export default Evenements;