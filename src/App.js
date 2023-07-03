import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import { SobreNosotros } from "./SobreNosotros";
import { Contacto } from "./Contacto";
import styles from "./App.module.css";
import backdropImage from "./backdrop.jpg";

export function App() {
  const [showSobreNosotrosContent, setShowSobreNosotrosContent] = useState(false);

  const handleLinkClick = () => {
    setShowSobreNosotrosContent(true);
  };

  return (
    <Router>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <h2 className={styles.logotipo}>LaEscabioneta</h2>
        </div>
        <nav className={styles.navbar}>
          <Link to="/" className={styles.navButton}>
            Inicio
          </Link>
          <Link to="/sobre-nosotros" className={styles.navButton} onClick={handleLinkClick}>
            Sobre Nosotros
          </Link>
          <Link to="/contacto" className={styles.navButton}>
            Contacto
          </Link>
        </nav>
      </header>

      <main>
        {!showSobreNosotrosContent && (
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <h3 className={styles.titulo}>Interestellar</h3>
              <p className={styles.descripcion}>
                Narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente descubierto para superar las limitaciones de los viajes espaciales tripulados y vencer las inmensas distancias que tiene un viaje interestelar.
              </p>
              <button className={styles.boton}>
                <a href="https://www.youtube.com/watch?v=LYS2O1nl9iM" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-play"></i>Reproducir
                </a>
              </button>
              <button className={styles.boton}>
                <a href="https://es.wikipedia.org/wiki/Interstellar" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-info-circle"></i>Más información
                </a>
              </button>
            </div>
            <img src={backdropImage} alt="Backdrop" className={styles.backdropImage} />
          </div>
        )}

        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </Router>
  );
}
