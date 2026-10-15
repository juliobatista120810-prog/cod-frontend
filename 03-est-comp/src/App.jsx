import "./App.css";
import Capitao from "./components/Capitao";
import Denis from "./components/Denis";
import Eleicao from "./components/Eleicao";
import Feira from "./components/Feira";
import Ganso from "./components/Ganso";
import Jogo from "./components/Jogo";
import JuninJaulas from "./components/JuninJaulas";
import MaquinaFumaca from "./components/MaquinaFumaca";
import NeryAcesso from "./components/NeryAcesso";
import Palestra from "./components/Palestra";
import Peso from "./components/Peso";
import Pousada from "./components/Pousada";
import Sarumano from "./components/Sarumano";
import TheMentalist from "./components/TheMentalist";

function App() {
  return (
    <div>
      <h1> 03 estados e componentes </h1>

      <h2>#0030</h2>
      <Ganso />
      <Capitao />
      <MaquinaFumaca />
      <Sarumano />
      <TheMentalist />
      <Denis />
      <NeryAcesso />
      <JuninJaulas />
      <hr />

      <h2>#0027.sq05</h2>
      <Pousada />
      <Jogo />
      <Eleicao />
      <Peso />
      <Feira />
      <Palestra />
      
    </div>
  );
}

export default App;
