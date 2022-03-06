import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/action";
import { Form } from "../molecules/Form";

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
    console.log(setTodoText)
  };
  
  return (
    <div style={style}>
      <Form
      value={todoText}
      onChange={onChange}
      onClick={onClickAdd}
      >
      </Form>
    </div>
    
  );
};
