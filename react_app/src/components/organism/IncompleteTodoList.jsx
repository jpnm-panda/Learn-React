import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { completedTodo, deletedTodo } from "../../action";

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
    dispatch(completedTodo(id));
  }

  const onClickDelete = (id) => {
    dispatch(deletedTodo(id))
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
                <button onClick={() => onClickDelete(todo.id)}>削除</button>
              </li>
            );
            })}
        </ul>
    </div>
  );
};
