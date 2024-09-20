import React, { useState, useEffect } from 'react'

import styles from "./styles.module.css";

function Select({ name, text }) {
  
  useEffect(() => {
    fetch('http://localhost:5000/listagemCateorias',{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      }
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("Data: ", data.data)
    })
    .catch(err => {
      console.log(error)
    })
  },[])

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
