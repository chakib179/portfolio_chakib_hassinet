import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

function Header() {
  return (
    <header className="Header">
      <div className="logo">Mon Portofolio</div>
      <nav className="nav-links">
        <Link to="/">Sur moi</Link>
        <Link to="/projets">Projets</Link>
        <Link to="/contact">Contacter moi</Link>
        <Link to="/creer-temoignage">Créer un témoignage</Link>
        <Link to="/liste-temoignages">Liste de témoignages</Link>
      </nav>
    </header>
  );
}

export default Header;

