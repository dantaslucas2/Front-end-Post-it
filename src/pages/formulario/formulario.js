import "./formulario.css";
import api from "../../api/tempo";
import React, { useState, useEffect } from "react";

function Formulario(props) {
  function handleSubmit() {
    if (
      document.getElementById("nome").value == "" ||
      document.getElementById("nome").value == null ||
      document.getElementById("telefone").value == "" ||
      document.getElementById("telefone").value == null ||
      document.getElementById("email").value == "" ||
      document.getElementById("email").value == null ||
      document.getElementById("modelo").value == "" ||
      document.getElementById("modelo").value == null ||
      document.getElementById("quantidade").value == "" ||
      document.getElementById("quantidade").value == null
    ) {
      alert("Preencha todos os campos antes de submeter");
    } else {
      let temp = {};
      temp.nome = document.getElementById("nome").value;
      temp.telefone = document.getElementById("telefone").value;
      temp.email = document.getElementById("email").value;
      temp.modelo = document.getElementById("modelo").value;
      temp.quantidade = document.getElementById("quantidade").value;

      console.log(document.getElementById("nome"));
      console.log(document.getElementById("telefone"));
      console.log(document.getElementById("email"));
      console.log(document.getElementById("modelo"));
      console.log(document.getElementById("quantidade"));

      const requestOptions = {
        method: "POST",
        //headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: `${temp.nome}`,
          telefone: `${temp.telefone}`,
          quantidade: `${temp.quantidade}`,
          email: `${temp.email}`,
          modelo: `${temp.modelo}`,
        }),
      };
      fetch(
        "https://1ldan5o58g.execute-api.us-east-1.amazonaws.com/prod/notes",
        requestOptions
      )
        .then((data) => console.log(data))
        .catch((error) => alert("Error"));
      alert("Solicitação salva");
    }
  }

  return (
    <div className="FormularioPage" id={props.id}>
      <head className="FormularioHeader">
        <h1>Reserva de Blocos Post-it</h1>
        <h2>
          Nome:
          <input className="Input" id="nome"></input>
          <br />
          <br />
          Telefone:
          <input className="Input" id="telefone"></input>
          <br />
          <br />
          E-mail:
          <input className="Input" id="email"></input>
          <br />
          <br />
          Modelo:
          <input className="Input" id="modelo"></input>
          <br />
          <br />
          Quantidade:
          <input
            className="InputNumber"
            type="number"
            min="1"
            max="1000"
            id="quantidade"
          ></input>
          <br />
          <br />
          <button onClick={handleSubmit} className="Button" type="submit">
            {" "}
            Reservar
          </button>
          <br />
          <br />
          <h1></h1>
        </h2>
      </head>
    </div>
  );
}

export default Formulario;
