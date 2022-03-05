import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../action";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const onChange = (event) => {
    setTodoText(event.target.value);
  }

  const onClickAdd = () => {
    if (todoText === "") return;
    dispatch(addTodo(todoText))
    setTodoText("");
  };

  return (
    <div style={style}>
      <input
        placeholder="TODOを入力"
        onChange={onChange}
        value={todoText}
      ></input>
      <button
        onClick={onClickAdd}
      >追加</button>
    </div>
  );
};
