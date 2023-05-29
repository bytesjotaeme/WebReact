import React from "react";
import styles from "./Contacto.module.css";

export function Contacto() {
  return (
    <div className={styles.contactoContainer}>
      <h1 className={styles.contactoTitle}>Contacto</h1>
      <p className={styles.contactoText}>Puedes ponerte en contacto con nosotros a través de los siguientes medios:</p>
      <ul className={styles.contactoList}>
        <li>Teléfono: 123-456-7890</li>
        <li>Email: josemi@gmail.com</li>
        <li>Redes sociales:
          <a href="https://www.facebook.com/ejemplo" className={styles.socialLink}>Facebook</a>,
          <a href="https://twitter.com/tunombre" className={styles.socialLink}>Twitter</a>,
          <a href="https://www.instagram.com/tunombre" className={styles.socialLink}>Instagram</a>
        </li>
      </ul>
    </div>
  );
}
