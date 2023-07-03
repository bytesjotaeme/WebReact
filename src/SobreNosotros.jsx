import React, { useState } from "react";
import fondoImage from "./fondo.jpg";
import styles from "./SobreNosotros.module.css";
import { Pie } from "./Pie";

export function SobreNosotros() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar cualquier operación adicional con el email, como guardar en una base de datos
    setSubscribed(true); // Marca la suscripción como aceptada
    setEmail(""); // Limpia el campo de entrada después de enviar
  };

  return (
    <div>
      <section className={styles.cabecera}>
        <nav>
          {/* Logo se ha eliminado */}
          <div className="login">
            <span><b>Iniciar sesión</b></span>
          </div>
        </nav>
        <div className={styles.presentacion}>
          <div>
            <h1>Programas y <br /> películas sin límite y<br /> mucho más.</h1>
            <h2>Disfruta donde quieras. Cancela en cualquier<br /> momento.</h2>
            {subscribed ? (
              <p>Suscripción aceptada. ¡Gracias por unirte!</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                <button type="submit">PROBAR AHORA &gt;</button>
              </form>
            )}
            <h3>¿Quieres ver LaEscabioneta ya? Ingresa tu email para crear una cuenta de LaEscabioneta o acceder a la tuya.</h3>
          </div>
        </div>
        <img src={fondoImage} alt="Fondo" className={styles.fondo} />
      </section>

      <Pie />
    </div>
  );
}

