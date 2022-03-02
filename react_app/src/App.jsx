import React, { useState, useReducer } from "react";
import "../src/index.css"
import { TodoItem } from "./components/organism/TodoItem";
import { CompleteTodoList } from "./components/organism/CompleteTodoList";
import { IncompleteTodoList } from "./components/organism/IncompleteTodoList";

// import { TodoItem } from "./components/molecules/TodoItem"


export const App = () => {
  // const todos = useSelector((state) => state.todos);

  return (
    <>
      <div>hoge</div> 
      <CompleteTodoList></CompleteTodoList>
      <IncompleteTodoList></IncompleteTodoList>
    </>
  );
};
