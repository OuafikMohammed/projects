import React, { useState } from 'react';

function Addtolist() {
  const [id, setID] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [etudiants, setEtudiants] = useState([
    { id: 1, nom: 'TAHER', prenom: 'ILYAS', color: '#A70FF4' },
    { id: 2, nom: 'HALOUI', prenom: 'ADAM', color: '#5555' },
    { id: 3, nom: 'SAYADI', prenom: 'MED AMINE', color: 'yellow' }
  ]);

  function Save() {
    if (isEditing) {
      setEtudiants(
        etudiants.map((item) =>
          item.id === editingId ? { id, nom, prenom } : item
        )
      );
      setIsEditing(false);
      setEditingId(null);
    } else {
      setEtudiants([...etudiants, { id, nom, prenom }]);
    }
    setID('');
    setNom('');
    setPrenom('');
  }

  function Delete(id) {
    setEtudiants(etudiants.filter((item) => item.id !== id));
  }

  function Modify(item) {
    setID(item.id);
    setNom(item.nom);
    setPrenom(item.prenom);
    setIsEditing(true);
    setEditingId(item.id);
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <div className="space-y-4">
        <input
          type="text"
          value={id}  
          onChange={(e) => setID(e.target.value)}
          placeholder="ID"
          className="border border-gray-300 p-2 w-full rounded-md"
        />
        <input
          type="text"
          value={nom}  
          placeholder="Nom"
          onChange={(e)=> setNom(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded-md"
        />
        <input
          type="text"
          value={prenom}  
          onChange={(e) => setPrenom(e.target.value)}
          placeholder="Prenom"
          className="border border-gray-300 p-2 w-full rounded-md"
        />
        <button
          onClick={Save}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          {isEditing ? 'Modifier' : 'Ajouter'}
        </button>
      </div>

      <table className="min-w-full table-auto mt-8 border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Nom</th>
            <th className="border border-gray-300 px-4 py-2">Prenom</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {etudiants.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{item.id}</td>
              <td className="border border-gray-300 px-4 py-2">{item.nom}</td>
              <td className="border border-gray-300 px-4 py-2">{item.prenom}</td>
              <td className="border border-gray-300 px-4 py-2">
                {/* Modify Button */}
                <button
                  onClick={() => Modify(item)}
                  className="bg-yellow-500 text-white py-1 px-2 rounded-md hover:bg-yellow-600 transition"
                >
                  Modifier
                </button>
                {/* Delete Button */}
                <button
                  onClick={() => Delete(item.id)}
                  className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 transition ml-2"
                >
                  Suppimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Addtolist;