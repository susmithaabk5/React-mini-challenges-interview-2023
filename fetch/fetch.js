import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    try {
      debugger;
      const res = await axios.get("https://randomuser.me/api/?results=10");
      setUserList(
        res.data.results.filter((user) => {
          return user.dob.age > 25;
        })
      );
      console.log(
        res.data.results.filter((user) => {
          return user.dob.age > 25;
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="App">
      {userList.map((user, i) => {
        return (
          <div key={user.login.uuid}>
            <p>
              Name: {user.name.first} {user.name.last}
            </p>
            <p>Email: {user.email}</p>
            <p>Age: {user.dob.age}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
