import "./styles.css";
import list from '../src/data/data'
import { useState, useRef } from "react";

export default function App() {
  const [lists, setLists] = useState(list);
  const [updateState, setUpdateState] = useState(null);
  const HandleEdit = (id) => {
    setUpdateState(id);
  };
  const HandleDelete = (id) => {
    setLists(
      lists.filter((deleteItem) => {
        
        return deleteItem.id !== id;
      })
    );
  };
  return (
    <div className="App">
      <AddList setLists={setLists} />
      <table>
        {lists.map((item, i) =>
          updateState === item.id ? (
            <Editrow
              item={item}
              list={lists}
              setLists={setLists}
              updateState={updateState}
              setUpdateState={setUpdateState}
            />
          ) : (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <button
                onClick={() => {
                  HandleEdit(item.id);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  HandleDelete(item.id);
                }}
              >
                Delete
              </button>
            </tr>
          )
        )}
      </table>
    </div>
  );
}
const AddList = ({ setLists }) => {
  const nameref = useRef();
  const priceref = useRef();

  const handleSubmit = (e) => {
    debugger;
    const name = e.target.elements.name.value;
    const price = e.target.elements.price.value;

    const obj = {
      id: list.length + 1,
      name,
      price
    };

    const newList = [...list, obj];
    setLists(newList);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter the Name here"
        ref={nameref}
      />
      <input
        type="text"
        name="price"
        placeholder="Enter the Price here"
        ref={priceref}
      />
      <button>Add</button>
    </form>
  );
};
const Editrow = ({ item, list, setLists, updateState, setUpdateState }) => {
  const handleName = (e) => {
    e.preventDefault();

    const value = e.target.value;
    const newList = list.map((li, i) => {
      return li.id === updateState ? { ...li, name: value } : li;
    });
    setLists(newList);
  };
  const handlePrice = (e) => {
    e.preventDefault();

    const value = e.target.value;
    const newList = list.map((li, i) => {
      return li.id === updateState ? { ...li, price: value } : li;
    });
    setLists(newList);
  };
  const handleSubmit = () => {
    setUpdateState(null);
  };

  return (
    <tr>
      <td>
        {" "}
        <input
          type="text"
          value={item.name}
          onChange={(e) => {
            handleName(e);
          }}
        />
      </td>
      
      <td>
        {" "}
        <input
          type="text"
          value={item.price}
          onChange={(e) => {
            handlePrice(e);
          }}
        />
      </td>
      <td>
        <button onClick={handleSubmit}>Update</button>
      </td>{" "}
    </tr>
  );
};
