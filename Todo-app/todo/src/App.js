import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

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
  const handleEdit = (i) => {
    setEditIndex(i);
    setEditText(items[i]);
  };
  const updateList = (i) => {
    const newupdate = [...items];
    newupdate[i] = editText;
    setEditText(newupdate);
    setEditIndex(null);
    setEditText("");
  };
  const cancel = () => {
    setEditIndex(null);
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
        items.map((data, index) => {
          return (
            <div className="block">
              <li key={index}>
                {editIndex === index ? (
                  <form>
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => {
                        setEditText(e.target.value);
                      }}
                    ></input>
                    <button onClick={() => updateList(index)}>update</button>
                    <button onClick={() => cancel(index)}>cancel</button>
                  </form>
                ) : (
                  <>
                    {data}
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </>
                )}
              </li>
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
