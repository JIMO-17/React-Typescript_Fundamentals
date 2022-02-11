import { Counter } from "./components/counter";
import { Usuario } from "./components/Usuario";

import { TimerPadre } from "./components/TimerPadre";


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
    </>
  );
}

export default App;
