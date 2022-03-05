import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { returnedTodo } from "../../action";

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

  return (
    <div style={style}>
      <ul>
        {todos
          .filter((todos) => todos.complete === true)
          .map((todo, index) => {
            return (
              <li key={index} className="list-row">
                <p>{todo.text}</p>
                <button onClick={() => onClickReturn(todo.id)}>戻す</button>
              </li>
            );
            })}
        </ul>
    </div>
  );
};
