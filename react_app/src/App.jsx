import React from "react";
import "../src/index.css"
import { InputTodo } from "./components/organism/InputTodo";
import { CompleteTodoList } from "./components/organism/CompleteTodoList";
import { IncompleteTodoList } from "./components/organism/IncompleteTodoList";
import { ButtonContextProvider } from "./context/ButtonContext";



// import { TodoItem } from "./components/molecules/TodoItem"


export const App = () => {
  // const todos = useSelector((state) => state.todos);

  return (
    <>
      <ButtonContextProvider>
        <InputTodo/>
        <IncompleteTodoList/>
        <CompleteTodoList/>
      </ButtonContextProvider>
    </>
  );
};
