import React, { useState } from 'react'

function Sarumano() {
    const[resultado, setResultado] = useState("")

    function deslocamentoEventos(){
        let estaGripado = prompt("Está gripado?");
        let tempoViagem = Number(prompt("Qual o tempo de viagem?"))
    
        if (estaGripado == 'sim' && tempoViagem < 45){
            setResultado("Viagem autorizada. Rumo ao show")
        }else{
            setResultado("Deslocamento inviável. Melhor recusar este evento.")
        }

    }
 return (
    <div className="MaquinaFumaca">
      <h3>deslocamentoEventos</h3>
      <button onClick={deslocamentoEventos}>Deslocamentos em eventos</button>
      {resultado}
    </div>

 );

}
export default Sarumano