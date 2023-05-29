import React from "react";
import universidadImage from "./universidad.jpg";
import styles from "./SobreNosotros.module.css";

export function SobreNosotros() {
  return (
    <div>
      <h1 className={styles.title}>Sobre Nosotros</h1>
      <div className={styles.imageContainer}>
        <img src={universidadImage} alt="Universidad" className={styles.image} />
      </div>
      <p className={styles.content}>Había una vez en la Universidad Tecnológica Nacional - Facultad Regional Tucumán, cuatro entusiastas estudiantes de programación llamados José Rivas, Ignacio de la Fuente, Jorge Vivanco y Lucas Vivanco. Estos jóvenes compartían una pasión común: el deseo de aprender React de manera eficiente y ponerle todo su empeño.

Desde el primer día de clases, se destacaron por su dedicación y compromiso con la materia. Cada uno de ellos tenía su propio estilo de aprendizaje, pero se apoyaban mutuamente para superar los desafíos que se les presentaban. Juntos formaron un equipo inseparable, dispuesto a enfrentar cualquier obstáculo que se interpusiera en su camino.

Durante largas noches de estudio en la biblioteca de la facultad, se sumergían en los libros y tutoriales de React, explorando cada concepto y sintaxis con curiosidad y determinación. No se conformaban con un simple conocimiento superficial, sino que buscaban comprender en profundidad los fundamentos de esta poderosa biblioteca JavaScript.

Además de las clases regulares, se dedicaron a asistir a talleres y conferencias relacionados con React. Aprovechaban cada oportunidad para expandir sus conocimientos y estar al tanto de las últimas tendencias y mejores prácticas en el desarrollo de aplicaciones web.

Con el tiempo, José, Ignacio, Jorge y Lucas comenzaron a aplicar sus habilidades de programación en proyectos personales y colaborativos. Juntos, desarrollaron aplicaciones web innovadoras y creativas, poniendo en práctica todos los conceptos y técnicas que habían aprendido. Cada nuevo desafío era una oportunidad para superarse a sí mismos y demostrar su talento.

Pero su viaje no se limitaba solo al ámbito académico. Estos cuatro amigos también disfrutaban de compartir su conocimiento con otros estudiantes. Organizaban grupos de estudio, donde compartían consejos y recursos sobre React, fomentando un ambiente de colaboración y aprendizaje mutuo.

A medida que avanzaban en su recorrido, se dieron cuenta de que aprender React no solo se trataba de adquirir habilidades técnicas, sino también de desarrollar un enfoque creativo y una mentalidad de resolución de problemas. Cada línea de código que escribían era una expresión de su pasión y dedicación por el desarrollo de software.</p>
    </div>
  );
}
