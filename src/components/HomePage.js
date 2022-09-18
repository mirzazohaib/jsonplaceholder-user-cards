import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import "./HomePage.css";

export const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div className="HomePage">
      <h1>Users Contact Information:</h1>
      <div className="cards_container">
        {users ? (
          users.map((user) => (
            <Card
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
            />
          ))
        ) : (
          <span className="loader">Loading...</span>
        )}
      </div>
    </div>
  );
};
