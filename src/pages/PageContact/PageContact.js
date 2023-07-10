import React, { useState } from "react";
import './PageContact.css';

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
 const nomRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/

function FormContact() {
  const [state, setState] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    
  isFormValid();
  }

  // fonction pour les validation des champs
  
  function validateForm(field, value) {
    switch (field) {
       
        case 'nom':
            if (!nomRegex.test(value)) setErrors(prev => ({ ...prev, [field]: `${field} ne doit contenir que des lettres et des espaces` }))
            else setErrors(prev => ({ ...prev, [field]: '' }))
            break
        case 'email':
            if (!emailRegex.test(value)) setErrors(prev => ({ ...prev, [field]:"L'email n'est pas valide  !" }))
            else setErrors(prev => ({ ...prev, [field]: '' }))
            break
        case 'sujet':
            if (!value) setErrors(prev => ({ ...prev, [field]:"Faite un choix SVP !" }))
            else setErrors(prev => ({ ...prev, [field]: '' }))
            break;

        
        case 'message':
            if (value.length<20) setErrors(prev => ({ ...prev, [field]: `Entrer le message ! Le message doit contenir au moin 20 caracteres ` }))
            else setErrors(prev => ({ ...prev, [field]: '' }))
            break
        default:
            break
    }
}

// Verifier si un champ a une erreur pour l'afficher
function fieldHasError(field) {
    if (errors[field] && errors[field] !== '') return true
    return false
}

// Verifier si toute la forme est valide
function isFormValid() {
    if (nomRegex.test(state.nom) && emailRegex.test(state.email)  && state.message.length>20 ) return true
    else {
        Object.keys(state).forEach(field => {
          validateForm(field, state[field])
        })
        return false
    }
}

  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom:
        <input
          type="text"
          name="nom"
          value={state.nom}
          onChange={handleChange}
          
        />
        {errors.nom && <span className="error">{errors.nom}</span>}
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        {fieldHasError("email") && <span className="error">{errors.email}</span>}
      </label>

      <label>
        Sujet:
        <select
          name="sujet"
          value={state.sujet}
          onChange={handleChange}
        >
          <option value="">-- Sélectionnez un choix --</option>
          <option value="Demande d'information">Demande d'information</option>
          <option value="Proposer un Offre ">Proposer un Offre</option>
          <option value="Autre">Autre</option>
        </select>
        {fieldHasError("sujet") && <span className="error">{errors.sujet}</span>}
      </label >

      <label >
        Message:
        <textarea
          name="message"
          value={state.message}
          onChange={handleChange}
        />
        {fieldHasError("message") && <span className="error">{errors.message}</span>}
      </label>

      <button type="submit">Envoyer</button>
    </form>
  );
}

function PageContact() {
  return (
    <div className="PageContact">
      <h2>Contactez-moi</h2>
      <FormContact />
    </div>
  );
}

export default PageContact;
