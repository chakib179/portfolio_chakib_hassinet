import React from 'react';
import './Projet1.css';

function Projet1() {
    return (
        <div className="Projet1">
            <div className="Projet1-content">
                <img src="/pictures/project1.png" alt="Photo Projet1" className="Projet1-image" />
                <div>
                    <h2 className="Projet1-title">Mon premier Projet : Gestion de commande</h2>
                    <p className="Projet1-description"> <h3>Gestion des commandes :</h3>Gestion des commandes : mon application permettra aux utilisateurs de passer des commandes pour différents produits .<br/>
<h3>Ajout de produits :</h3> Les utilisateurs pourront ajouter des produits à leur commande en sélectionnant les produits disponibles dans une liste.<br/><br/>
<h3>Quantité et prix :</h3>Quantité et prix : Les utilisateurs pourront spécifier la quantité désirée pour chaque produit et le prix total de la commande sera automatiquement calculé.<br/><br/>
<h3>Panier d'achat  :</h3>Panier d'achat : Votre application aura une fonctionnalité de panier d'achat où les utilisateurs pourront voir un récapitulatif de leur commande avant de la valider. </p>
                    <ul className="Projet1-tech-list">
                    <h1>Technologies utilisées:</h1>
                        <li>C#</li>
                        <li>Winform</li>
                    </ul>
                  
                </div>
            </div>
        </div>
    );
}

export default Projet1;

