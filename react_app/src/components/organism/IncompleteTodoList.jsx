import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { completedTodo, deletedTodo } from "../../action";
import { useButtonContext } from "../../context/ButtonContext";
import { Button } from "../atoms/Button";

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

  const { completeButtonText, deleteButtonText } = useButtonContext();

  return (
    <div style={style}>
      <ul>
        {todos
          .filter((todos) => todos.complete === false)
          .map((todo, index) => {
            return (
              <li key={index} className="list-row">
                <p>{todo.text}</p>
                <Button
                  buttonText={completeButtonText}
                  onClick={() => onClickComplete(todo.id)} />
                <Button
                  buttonText={deleteButtonText}
                  onClick={() => onClickDelete(todo.id)}/>
              </li>
            );
            })}
      </ul>
    </div>
  );
};
