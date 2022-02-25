import React from "react";
import { Form } from "./molecules/Form";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <Form
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
        onClick={onClick}
      />
    </div>
  );
};
