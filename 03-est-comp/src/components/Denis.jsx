import React, { useState } from 'react'

function Denis() {
    const[resultado, setResultado] = useState("")

    function SistemaTransporte(){
        let emManutencao = prompt("Há manutenção ativa? true or false(verdadeiro ou falso)");
        let emergenciaAtiva = prompt("O nível de emergência está alto? true or false(verdadeiro ou falso)");
    
        if (emManutencao === "false" && emergenciaAtiva === "false"){
            setResultado("Transporte liberado para uso.")
        }else if(emManutencao === "true" && emergenciaAtiva === "true"){
            setResultado("Transporte indisponível por motivo de segurança.")
        }

    }
  return (
    <div className="Denis">
      <h3>Sistema de Transporte</h3>
      <button onClick={SistemaTransporte}>Sistema transporte</button>
      {resultado}
    </div>
  )
} 

export default Denis