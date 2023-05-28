import "./styles.css";
import { useState } from "react";
import FormChild from "./FormChild";

export default function App() {
  const [details, setDetails] = useState({
    name: "your name",
    number: "your number"
  });
  const formSubmit = (newDetails) => {
    debugger;
    setDetails(newDetails);
  };
  return (
    <div className="App">
      <h1>child to parent</h1>
      <FormChild formSubmit={formSubmit} />
      <p>Name:{details.name}</p>
      <p>Number:{details.number}</p>
    </div>
  );
}
