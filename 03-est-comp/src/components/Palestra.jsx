import React, { useState } from "react";

function Palestra() {
  const [resultado, setResultado] = useState();

  function escolherPalestra() {
    let numero = Number(prompt("Qual é o número da palestra?"));

    if (numero === 1) {
      setResultado("Animações com Scratch, laboratório 305, 19h");
    } else if (numero === 2) {
      setResultado("Scratch para gamers, laboratório 512, 20h");
    } else if (numero === 3) {
      setResultado("JavaScript para leigos, laboratório 101, 19h");
    } else if (numero === 4) {
      setResultado(
        "Tópicos avançados de JavaScript, laboratório 305, 20h"
      );
    } else if (numero === 5) {
      setResultado("Vida e carreira, auditório, 21h");
    } else {
      setResultado("Palestra não encontrada.");
    }
  }

  return (
    <div className="Palestra">
      <h2>Palestra</h2>

      <button onClick={escolherPalestra}>
        Escolher palestra
      </button>

      <p>{resultado}</p>
    </div>
  );
}

export default Palestra;