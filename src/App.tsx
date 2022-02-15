import { Counter } from "./components/counter";
import { Usuario } from "./components/Usuario";

import { TimerPadre } from "./components/TimerPadre";

import { ContadorRed } from "./components/ContadorRed";
import { Formulario } from "./components/Formulario";

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <h2>UseState</h2>
      <Counter />
      <Usuario />

      <hr />
      <h2>UseEffect - useRef</h2>
      <TimerPadre />

      <hr />
      <h2>UseReducer</h2>
      <ContadorRed />

      <hr />
      <h2>CustomHooks</h2>
      <Formulario />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </>
  );
}

export default App;
