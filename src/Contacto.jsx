import React, { useState } from "react";
import styles from "./Contacto.module.css";


export function Contacto() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Crear un nuevo objeto de contacto
    const newContact = {
      name,
      email,
      message,
    };

    // Agregar el nuevo contacto a la lista de contactos
    setContacts([...contacts, newContact]);

    // Limpiar los campos del formulario
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className={styles.contacto}>
      <h2>Contacto</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>

        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" value={message} onChange={handleMessageChange} />
        </div>

        <button type="submit">Enviar</button>
      </form>

      <h3>Contactos:</h3>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {contact.name}, <strong>Email:</strong> {contact.email}, <strong>Mensaje:</strong>{" "}
            {contact.message}
          </li>
        ))}
      </ul>

      
    </div>
    
  );
}

