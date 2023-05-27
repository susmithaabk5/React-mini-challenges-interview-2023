import React, { useState } from "react";

const NestedArrayOperations = () => {
  const [data, setData] = useState([
    { id: 1, name: "John", items: ["Apple", "Banana", "Orange"] },
    { id: 2, name: "Jane", items: ["Grapes", "Watermelon", "Pineapple"] },
    { id: 3, name: "Bob", items: ["Strawberry", "Blueberry", "Raspberry"] },
  ]);

  const handleUpdateItem = (itemId, nestedIndex, updatedItem) => {
    debugger;
    setData((prevData) =>{
      prevData.map((item) =>
        item.id === itemId
          ? {
              ...item,
              items: [
                ...item.items.slice(0, nestedIndex),
                updatedItem,
                ...item.items.slice(nestedIndex + 1),
              ],
            }
          : item
      )
        }
    );
  };

  const handleDeleteItem = (itemId, nestedIndex) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === itemId
          ? {
              ...item,
              items: [
                ...item.items.slice(0, nestedIndex),
                ...item.items.slice(nestedIndex + 1),
              ],
            }
          : item
      )
    );
  };

  const handleAddItem = (itemId, newItem) => {
    debugger;

    setData((prevData) => {
      console.log(prevData, "prevData");
      prevData.map((item) =>
        item.id === itemId
          ? {
              ...item,
              items: [...item.items, newItem],
            }
          : item
      );
    });
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <ul>
            {item.items.map((nestedItem, nestedIndex) => (
              <li key={nestedIndex}>
                {nestedItem}
                <button
                  onClick={() =>
                    handleUpdateItem(item.id, nestedIndex, "Updated Item")
                  }
                >
                  Update
                </button>
                <button onClick={() => handleDeleteItem(item.id, nestedIndex)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => handleAddItem(item.id, "New Item")}>
            Add Item
          </button>
        </div>
      ))}
    </div>
  );
};

export default NestedArrayOperations;
