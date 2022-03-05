import React from "react";

export const Button = (props) => {
  const { text, todoText, onChange, onClick, disabled } = props;
  return <button onClick={onClick}>{text}</button>;
};
