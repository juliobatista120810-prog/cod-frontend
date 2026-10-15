import React, { useState } from 'react'

function TheMentalist() {
    const[resultado, setResultado] = useState("")

    function ilusao(){
        let somFuncionando = prompt("O som está funcionando? true ou false(verdadeiro ou falso)")
        let figurinoCompleto = prompt("O figurino está completo? true ou false(verdadeiro ou falso)")

        if (somFuncionando === "true" && figurinoCompleto === "true"){
            setResultado("Palco liberado para Sarumano! Luzes, câmera, ilusão!");
        }else if(somFuncionando === "false" && figurinoCompleto === "true"){
            setResultado("Sem som. Realizar apresentação alternativa no salão.");
        }else if(somFuncionando === "true" && figurinoCompleto === "false"){
            setResultado("Faltando parte do figurino. Te vira no improviso!");
        }else{
            setResultado("Apresentação cancelada. Hora da mágica de desaparecer…");
        }
    
    }
  return (
    <div className="TheMentalist">
      <h3>TheMentalist</h3>
      <button onClick={ilusao}>Patrick Jane</button>
      {resultado}
    </div>
  )    
    }
export default TheMentalist