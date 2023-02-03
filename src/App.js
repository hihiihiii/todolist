import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import TodoCreate from "./Components/TodoCreate";
import TodoDbClickGuide from "./Components/TodoDbClickGuide";
import TodoHead from "./Components/TodoHead";
import TodoList from "./Components/TodoList";
import TodoTemplate from "./Components/TodoTemplate";
import { TodoProvider } from "./TodoProvider";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #c8d6e5;
    box-sizing: border-box;
  }
`;

const TodoDbClickBlock = styled.div`
  text-align: center;
  font-size: 20px;
  opacity: 0.4;
`;

const App = () => {
  return (
    <>
      <TodoProvider>
        <GlobalStyle></GlobalStyle>
        <TodoTemplate>
          <TodoHead></TodoHead>
          <TodoList></TodoList>
          <TodoCreate></TodoCreate>
        </TodoTemplate>
        <TodoDbClickBlock>더블 클릭시 수정 가능!</TodoDbClickBlock>
      </TodoProvider>
    </>
  );
};

export default App;
