import React from 'react';
import './ProjectRestaurant.css';

function ProjectRestaurant() {
  return (
    <div className="ProjectRestaurant">
      <div className="ProjectRestaurant-image-container">
        <img src="/pictures/Projet2A.png" alt="Projet2A.png" className="ProjectRestaurant-image" />
      </div>
      <div className="ProjectRestaurant-content">
        <h1 className="ProjectRestaurant-title">Mon deuxième Projet : Plateforme de Restaurant</h1>
        <p className="ProjectRestaurant-description">
          La plateforme de restaurant que j'ai réalisée offre une solution complète pour la gestion d'un établissement de restauration. En plus d'offrir un aperçu attrayant du restaurant pour les clients, elle possède également une série de fonctionnalités robustes pour faciliter les opérations quotidiennes.
        </p>
        <div className="ProjectRestaurant-image-container">
          <img src="/pictures/Projet2B.png" alt="Projet2B.png" className="ProjectRestaurant-image" />
        </div>
        <h1>Technologies utilisées:</h1>
        <ul className="ProjectRestaurant-tech-list">
          <li>Vue.js</li>
          <li>JavaScript</li>
          <li>CSS</li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectRestaurant;
