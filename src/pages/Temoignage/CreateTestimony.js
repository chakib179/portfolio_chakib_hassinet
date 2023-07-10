import React, { useState } from "react";
import './CreateTestimony.css';

const CreateTestimony = ({ onTestimonySubmit }) => {
    const [name, setName] = useState("");
    const [testimony, setTestimony] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();


        if (!name.trim()) {
            setError("Le nom est requis !!");
            return;
        }

        if (!/^[a-zA-Z\s]*$/.test(name)) {
            setError("Le nom ne doit contenir que des lettres et des espaces !!");
            return;
        }

        if (!testimony.trim()) {
            setError("Le témoignage est requis !!");
            return;
        }

        onTestimonySubmit({ name, testimony });
        setName("");
        setTestimony("");
        setError("");
    };

// la form pour l'ajout des temoignage

    return (
        <div className="CreateTestimony">

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nom :</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Votre nom"
                    
                />
                <label htmlFor="testimony">Témoignage :</label>
                <textarea
                    id="testimony"
                    value={testimony}
                    onChange={(e) => setTestimony(e.target.value)}
                    placeholder="Votre témoignage"
                    
                />

                <button type="submit">Commenter</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>

    );
    
};

export default CreateTestimony;
