import React, { useState } from "react";

function Capitao() {
  const [resultado, setResultado] = useState("");

  function natacao() {
    let sabeNadar = (prompt("Você sabe nadar?"));
    let idade = Number(prompt("Quantos anos você tem?"));
    let temRecomendacao = (prompt("Você tem recomendacao?"));

    if (idade >= 16 && sabeNadar == "sim") {
      setResultado("Aprovado para o navio!");
    } else if (sabeNadar == "não" && temRecomendacao == "sim" && idade >= 14) {
      setResultado(
        "Aprovado sob recomendação. Monitorar nas primeiras viagens.",
      );
    } else {
      setResultado(
        "Reprovado. Volte quando estiver mais preparado para o mar.",
      );
    }
  }
  return (
    <div className="capitão">
        <h3>capitão</h3>
    <button onClick={natacao}>natacao</button>
      {resultado}
    </div>
  );
}

export default Capitao;
