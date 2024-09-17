import React from "react";

import styles from "./styles.module.css";

function Select({ name, text }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option>Selecione uma categoria</option>
        <option>Ficção ciêntífica</option>
        <option>Fantasia heroica</option>
        <option>Suspense</option>
        <option>Terror</option>
      </select>
    </div>
  );
}

export default Select;
