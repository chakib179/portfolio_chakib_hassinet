import { Link } from 'react-router-dom';
import './Projets.css';

function Projets() {
    return (
        <div className="projets">
            <h1 className="projets-title">Mes Projets:</h1><br /><br />
            <div className="projets-list">
                <div className="projet-item">
                    <h2><Link to="/Projet1" className="projet-link">Gestion Commande</Link></h2>
                    <p className="projet-description"> application Winform </p>
                    <img src="/pictures/project1.jpg" alt="Photo Projet1" className="projet-image" />
                </div>
                <div className="projet-item">
                    <h2><Link to="/ProjectRestaurant" className="projet-link">Restaurant</Link></h2>
                    <p className="projet-description">A restaurant platform built with Vue.js </p>
                    <img src="/pictures/Projet2C.png" alt="Photo Projet 2" className="projet-image" />
                </div>
            </div>
        </div>
    );
}

export default Projets;
