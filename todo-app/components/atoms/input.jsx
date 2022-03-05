import React from "react";

export const Input = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <input
      disabled={disabled}
      placeholder="TODOを入力"
      value={todoText}
      onChange={onChange}
    ></input>
  );
};
