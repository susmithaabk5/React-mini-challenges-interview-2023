import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      setItems([...items, text]);
    }
    setText("");
  };
  const handleDelete = (index) => {
    const spreadItem = [...items];
    spreadItem.splice(index, 1);
    setItems(spreadItem);
  };
  return (
    <div className="App">
      <div className="block">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </div>
      {items.length === 0 ? (
        <p>No items added to the cart</p>
      ) : (
        items.map((data, i) => {
          return (
            <div className="block" key={i}>
              <li>{data}</li>
              <button onClick={(i) => handleDelete(i)}>Delete</button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
