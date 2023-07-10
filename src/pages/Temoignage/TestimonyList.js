import React, { useState } from "react";
import './TestimonyList.css';

const TestimonyList = ({ testimonies, onTestimonyUpdate, onTestimonyDelete }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingName, setEditingName] = useState("");
  const [editingTestimony, setEditingTestimony] = useState("");
  const [error, setError] = useState("");

  const handleEdit = (indice, name, testimony) => {
    setEditingIndex(indice);
    setEditingName(name);
    setEditingTestimony(testimony);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!editingName.trim()) {
      setError("Le nom est requis");
      return;
    }

    if (!/^[a-zA-Z\s]*$/.test(editingName)) {
      setError("Le nom ne doit contenir que des lettres et des espaces");
      return;
    }

    if (!editingTestimony.trim()) {
      setError("Le témoignage est requis");
      return;
    }

    onTestimonyUpdate(editingIndex, { name: editingName, testimony: editingTestimony });
    setEditingIndex(null);
    setError("");
  };

// la forme pour la liste des temoignage
  return (
    <div className="TestimonyList">
     
      <h1> Liste des témoignages :</h1>
      <ul>
        {testimonies.map((testimony, indice) => (
          <li key={indice}>
            {editingIndex === indice ? (
              <form onSubmit={handleUpdate}>
                <input 
                  type="text" 
                  value={editingName} 
                  onChange={(e) => setEditingName(e.target.value)} 
                  required 
                />
                <textarea 
                  value={editingTestimony} 
                  onChange={(e) => setEditingTestimony(e.target.value)} 
                  required 
                />
                <button type="submit">Mettre à jour</button>
                {error && <p className="error">{error}</p>}
              </form>
            ) : (
             
              <div className="TestimonyList">
                <h2>{testimony.name}</h2>
                <p>{testimony.testimony}</p>
                <button className="edit-btn" onClick={() => handleEdit(indice, testimony.name, testimony.testimony)}>Modifier</button>
                <button className="delete-btn" onClick={() => onTestimonyDelete(indice)}>Supprimer</button>
              
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestimonyList;
