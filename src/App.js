import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import { SobreNosotros } from "./SobreNosotros";
import { Contacto } from "./Contacto"; // Importar el componente Contacto
import styles from "./App.module.css";
import banner from "./banner.jpg";

export function App() {
  return (
    <Router>
      <header>
        <div className={styles.bannerContainer}>
          <img src={banner} alt="Banner" className={styles.bannerImage} />
          <div className={styles.buttonContainer}>
            <Link to="/" className={styles.navButton}>Inicio</Link>
            <Link to="/sobre-nosotros" className={styles.navButton}>Sobre Nosotros</Link>
            <Link to="/contacto" className={styles.navButton}>Contacto</Link>
          </div>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} /> {/* Agregar la ruta para Contacto */}
        </Routes>
      </main>
    </Router>
  );
}


