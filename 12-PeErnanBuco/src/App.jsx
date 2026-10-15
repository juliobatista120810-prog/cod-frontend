import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Ofertas from "./components/Ofertas";
import MInhasCompras from "./components/MInhasCompras";

function App() {
  const [pagina, setPagina] = useState(1);
  function mostrarHome(){
    setPagina(0)
  }
  return (
    <div className="app">
      <nav>
        <button onClick={mostrarOracaoDoDev}>Oração do Backend</button>
        <button onClick={() => setPagina(1)}>Oração do Deploy</button>
        <button onClick={() => setPagina(2)}>Oração do dev Cansado</button>
        <button onClick={() => setPagina(2)}>Oração do Dev Web</button>
        <button onClick={() => setPagina(2)}>Oração do Frontend</button>
        <button onClick={() => setPagina(2)}>Oração do FullStack</button>
        <button onClick={() => setPagina(2)}>Oração do Programador</button>
        <button onClick={() => setPagina(2)}>Oração do Resiliente</button>
        <button onClick={() => setPagina(2)}>Oração do Aprendiz</button>
    
      </nav>
      <h1>Navegação</h1>

      {pagina == 0 && <OracaoDoBack-end />}
      {pagina == 1 && <OracaoDoDeploy />}
      {pagina == 2 && <OracaoDoDevCansado />}
      {pagina == 2 && <OracacaoDoDevWeb />}
      {pagina == 2 && <OracaoDoFrontende />}
      {pagina == 2 && <OracaoDoFullStack />}
      {pagina == 2 && <OracaoDoProgramador />}
      {pagina == 2 && <OracaoDoResiliente />}
      {pagina == 2 && <OracaoDoAprendiz />}
    </div>
  );
}

export default App;