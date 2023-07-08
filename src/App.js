import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SurMoi from "./pages/SurMoi/SurMoi";
import Projets from './pages/Projets/Projets';
import Projet1 from "./pages/Projet1/Projet1";
import ProjectRestaurant from "./pages/ProjectRestaurant/ProjectRestaurant";
import PageContact from "./pages/PageContact/PageContact";
import CreateTestimony from "./pages/Temoignage/CreateTestimony";
import TestimonyList from "./pages/Temoignage/TestimonyList";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import React, { useState } from "react";

function App() {
  const [testimonies, setTestimonies] = useState([]);

  const handleTestimonySubmit = (testimony) => {
    setTestimonies([...testimonies, testimony]);
  };

  const handleTestimonyDelete = (indice) => {
    setTestimonies(testimonies.filter((_, i) => i !== indice));
  };

  const handleTestimonyUpdate = (indice, updatedTestimony) => {
    setTestimonies(testimonies.map((testimony, i) => i === indice ? updatedTestimony : testimony));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SurMoi />} />
        <Route path="/Projets" element={<Projets />} />
        <Route path="/Projet1" element={<Projet1 />} />
        <Route path="/ProjectRestaurant" element={<ProjectRestaurant />} />
        <Route path="/contact" element={<PageContact />} />
        <Route 
          path="/creer-temoignage" 
          element={<CreateTestimony onTestimonySubmit={handleTestimonySubmit} />} 
        />
        <Route 
          path="/liste-temoignages" 
          element={<TestimonyList 
            testimonies={testimonies} 
            onTestimonyDelete={handleTestimonyDelete} 
            onTestimonyUpdate={handleTestimonyUpdate} 
          />} 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
