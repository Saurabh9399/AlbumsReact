import React, { useEffect, useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import Album from "./components/Album";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch(" https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (name) => {
    await fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify({
        title: name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(users);
  return (
    <div className="App">
      <h3 style={{fontSize:'2rem', color:'navy'}}>Albums list React app</h3>

      <br />
      <AddUser onAdd={onAdd} />
      <div className="USer-Wraper">
        {users.map((user) => (
          <Album
            id={user.id}
            key={user.id}
            name={user.title}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default App;