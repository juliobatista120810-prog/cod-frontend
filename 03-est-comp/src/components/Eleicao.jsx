import React, { useState } from "react";

function Eleicao() {
  const [resultado, setResultado] = useState("");

  function votacao() {
    let idade = Number(prompt("Qual é a sua idade? "));

    if (idade < 16) {
      setResultado("Não pode votar, volte ano que vem");
    } else if (idade == 16 || idade == 17) {
      setResultado("Voto opcional");
    } else if (idade >= 18 && idade < 65) {
      setResultado("Voto obrigatório");
    } else {
      setResultado("Voto opcional");
    }
  }

  return (
    <div className="Eleicao">
      <h2>As eleições deste ano</h2>

      <button onClick={votacao}>As eleições</button>

      <p>{resultado}</p>
    </div>
  );
}

export default Eleicao;
