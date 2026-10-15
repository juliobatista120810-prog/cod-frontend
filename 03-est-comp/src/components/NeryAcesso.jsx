import React, { useState } from 'react'

function NeryAcesso() {
    const[resultado, setResultado] = useState("")

    function acessoCentro(){
        let crachaValido = prompt("O cracha é valido?");
        let digitalReconhecida = prompt("A digital foi reconhecida?")

        if(crachaValido === "sim" && digitalReconhecida === "sim"){
            setResultado("Acesso permitido")
        }else{
            setResultado("Acesso negado")
        }
        
    }
  return (
    <div className="Denis">
      <h3>Acesso ao centro</h3>
      <button onClick={acessoCentro}>Acessamento do centro</button>
      {resultado}
    </div>
  )

}
export default NeryAcesso