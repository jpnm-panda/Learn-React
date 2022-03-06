import React from "react";

export const Input = (props) => {
  const { todoText, onChange, disabled } = props;
  
  return (
    <input
      placeholder="TODOを入力"
      value={todoText}
      onChange={onChange}
    ></input>
  );
};
