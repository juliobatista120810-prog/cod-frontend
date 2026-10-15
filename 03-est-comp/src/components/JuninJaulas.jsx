import React, { useState } from 'react'

function JuninJaulas() {
    const[resultado, setResultado] = useState("")

    function jaulasAutomatizadas(){
        let visitantesNaArea = Number(prompt("Há visitantes na área?"));
        let horaAtual = Number(prompt("Qual é o horário de agora?"));
    
        if (visitantesNaArea == 0 && horaAtual <= 8 || horaAtual >= 18){
            setResultado("Liberação autorizada. Abrindo jaula.")
        }else{
            setResultado("Liberação negada. Área em uso ou fora do horário permitido.")
        }

    }
  return(
    <div className="jaulasAutomizadas">
      <h3>Junin e as suas jaulas automatizadas</h3>
      <button onClick={jaulasAutomatizadas}>Jaulas automizadas</button>
      {resultado}
    </div>
  )
} 

export default JuninJaulas