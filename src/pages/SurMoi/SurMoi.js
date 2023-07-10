

import React from 'react';
import './SurMoi.css';

function SurMoi () {
    return (
      <div className="SurMoi-page">
        <div className="profile-container">
          <div className="profile-pic-container">
            <img className="profile-pic" src="/pictures/profile.jpg" alt="Profile" />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">Chakib Hassinet</h1><br />

            <h3 className="profile-description">
              Développeur Full Stack passionné et dévoué.<br />
              Solide connaissance des technologies frontend et backend, y compris JavaScript (React.js, Node.js), et SQL.<br />
              Forte orientation vers les résultats et un engagement pour le développement de solutions logicielles de haute qualité.<br />
              A la recherche d'une opportunité pour appliquer et approfondir mes compétences dans une entreprise innovante.
            </h3>

            <h2 className="profile-skills-heading">Compétences:</h2>
            <ul className="profile-skills-list">
              <li>React.js</li>
              <li>JavaScript</li>
              <li>C#</li>
              <li>Node.js</li>
              <li>SQL</li>
              <li>MongoDB</li>
              <li>Node.js</li>
           
            </ul>

            <h2 className="profile-languages-heading">Langues:</h2>
            <ul className="profile-languages-list">
              <li>Français</li>
              <li>Anglais</li>
              
            </ul>
          </div>
        </div>
      </div>
    );
};

export default SurMoi;
