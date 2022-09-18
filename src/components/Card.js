import React from "react";
import "./Card.css";
import { Button } from "./Button";

export const Card = (props) => {
  const { id, name, username, email } = props;

  return (
    <div className="main_card" key={id}>
      <div className="card_image"> {name[0]}</div>
      <div className="card_title"> {name}</div>
      <div className="card_user"> @{username}</div>
      <div className="card_email"> {email}</div>
      <Button to={`/users/${id}`} label={"More Details"} />
    </div>
  );
};
