import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { returnedTodo } from "../../redux/action";
import { useButtonContext } from "../../context/ButtonContext";
import { Button } from "../atoms/Button";

const style = {
  backgroundColor: "#ffffe0",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const CompleteTodoList = () => {

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const onClickReturn = (id) => {
    dispatch(returnedTodo(id));
  }

  const { returnButtonText } = useButtonContext();

  return (
    <div style={style}>
      <ul>
        {todos
          .filter((todos) => todos.complete === true)
          .map((todo, index) => {
            return (
              <li key={index} className="list-row">
                <p>{todo.text}</p>
                <Button
                  buttonText={returnButtonText}
                  onClick={() => onClickReturn(todo.id)}/>
              </li>
            );
            })}
        </ul>
    </div>
  );
};
