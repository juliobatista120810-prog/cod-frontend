import React, { useState } from "react";

function Peso() {
  const [resultado, setResultado] = useState("");

  function calculoImc() {
    let altura = Number(prompt("Qual é a sua altura em metros, ex: 1.70"));
    let genero = prompt(" Qual o seu genero, Homem ou Mulher? ");
    let peso;

    if (genero == "mulher") {
      peso = 62.1 * altura - 44.7;
    } else if (genero == "homem") {
      peso = 72.7 * altura - 58;
    }

    setResultado(peso);
  }

  return (
    <div className="Peso">
      <h2> Calculo de peso </h2>

      <button onClick={calculoImc}>Calcular</button>

      <p>{resultado}</p>
    </div>
  );
}

export default Peso;
