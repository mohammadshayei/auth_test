import React from "react";
import "./Button.scss";
function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`button-container ${props.className}`}
      style={{...props.style}}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default Button;
