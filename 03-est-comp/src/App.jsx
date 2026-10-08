import "./App.css";
import Eleicao from "./components/Eleicao";
import Feira from "./components/Feira";
import Jogo from "./components/Jogo";
import Peso from "./components/Peso";
import Pousada from "./components/Pousada";

function App() {
  return (
    <div>
      <h1> 03 estados e componentes </h1>
      <Pousada />
      <Jogo />
      <Eleicao />
      <Peso />
      <Feira />
    </div>
  );
}

export default App;
