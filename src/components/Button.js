import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

export const Button = (props) => {
  return (
    <Link className="card_button" to={props.to}>
      {props.label}
    </Link>
  );
};
