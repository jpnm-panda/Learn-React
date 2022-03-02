import React from "react";
import { useSelector } from 'react-redux';

const style = {
  backgroundColor: "#c6ffe2",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const IncompleteTodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div style={style}>
      <ul>
        {todos
          .filter((list) => list.complete === false)
          .map((todo, index) => (
              <li key={index}>{todo.text}</li>
          ))}
        </ul>
    </div>
  );
};