import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [record, setRecord] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
      setRecord(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const filter = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredData = data.filter((d) =>
      d.name.toLowerCase().includes(searchValue)
    );
    setRecord(filteredData);
  };

  return (
    <div className="App">
      <input type="text" className="search" onChange={filter} />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email ID</th>
          </tr>
        </thead>
        <tbody>
          {record.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.username}</td>
              <td>{d.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;


