import { useState } from "react";

function Feira() {
  const [total, setTotal] = useState(0);

  function feirao() {
    const quantidade = 15;

    if (quantidade < 12) {
      setTotal(quantidade * 0.3);
    } else {
      setTotal(quantidade * 0.25);
    }
  }

  return (
    <div>
      <h1>Compra de Maçãs</h1>

      <button onClick={feirao}>Calcular Feira</button>

      <p>Total da compra: R$ {total.toFixed(2)}</p>
    </div>
  );
}

export default Feira;
