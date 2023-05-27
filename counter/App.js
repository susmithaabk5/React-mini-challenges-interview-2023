import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState(0);
  return (
    <div className="App">
      <p>{state}</p>
      <button onClick={() => setState(state + 1)}>Increment</button>
      <button onClick={() => setState(state - 1)}>Decrement</button>
    </div>
  );
}
