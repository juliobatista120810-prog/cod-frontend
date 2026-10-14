import React, { useState } from 'react'

function MaquinaFumaca() {
    const[resultado, setResultado] = useState('')
    function showsDeMagica(){
        let criancasPequenas = Number(prompt("Há quanta crianças?"));
        let velocidadeVento  = Number(prompt("Qual é a velocidade do vento?"));

        if (criancasPequenas == 0 && velocidadeVento == 0.5){
            setResultado("Fumaça liberada. Que comecem os mistérios!")
        }else{
            setResultado("Fumaça bloqueada. Aguardar condições ideais.")
        }
    
    }
 return (
    <div className="MaquinaFumaca">
      <h3>MaquinaFumaca</h3>
      <button onClick={showsDeMagica}>Shows de magica</button>
      {resultado}
    </div>
 );
}

export default MaquinaFumaca;