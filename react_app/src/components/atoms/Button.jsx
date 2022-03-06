import React from "react";

export const Button = (props) => {
  
  const { onClick, buttonText } = props;
  return (
    <button
    onClick={onClick}
    >{buttonText}</button>
  )
};
