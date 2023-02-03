import React from "react";
import styled from "styled-components";
import TodoItem from "../Components/TodoItem";
import { useTodoState } from "../TodoProvider";

const TodoListBlock = styled.div`
  padding-top: 20px;
  padding-right: 40px;
  padding-left: 40px;
  padding-bottom: 40px;
  overflow: auto;
`;

const TodoList = () => {
  const state = useTodoState();

  return (
    <TodoListBlock>
      {state?.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        ></TodoItem>
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
