import React, { useState, useReducer } from "react";
import "../src/index.css"
import { InputTodo } from "./components/organism/InputTodo";
import { CompleteTodoList } from "./components/organism/CompleteTodoList";
import { IncompleteTodoList } from "./components/organism/IncompleteTodoList";
import store from "./store";

// import { TodoItem } from "./components/molecules/TodoItem"


export const App = () => {
  // const todos = useSelector((state) => state.todos);

  return (
    <>
      <InputTodo></InputTodo>
      <IncompleteTodoList></IncompleteTodoList>
      <CompleteTodoList></CompleteTodoList>
      
    </>
  );
};
