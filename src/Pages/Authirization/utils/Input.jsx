import React from "react";
import "../style/input.css"

const Input = (props) => {
  return (
    <input
    className= "text_input"
      onChange={(event) => props.setValue(event.target.value)}
      value={props.value}
      type = {props.type}
      placeholder = {props.placeholder}
    />
  );
};

export default Input;
