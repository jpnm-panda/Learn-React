import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { completedTodo } from "../../action";

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

  const dispatch = useDispatch();
  
  const onClickComplete = (id) => {
    console.log(id);
    dispatch(completedTodo(id));
  }

  return (
    <div style={style}>
      <ul>
        {todos
          .filter((todos) => todos.complete === false)
          .map((todo, index) => {
            return (
              <li key={index} className="list-row">
                <p>{todo.text}</p>
                <button onClick={() => onClickComplete(todo.id)}>完了</button>
              </li>
            );
            })}
        </ul>
    </div>
  );
};
