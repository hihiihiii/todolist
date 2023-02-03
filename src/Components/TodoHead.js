import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoProvider";

const TodoHeadBlock = styled.div`
  padding-top: 32px;
  padding-bottom: 35px;
  padding-right: 40px;
  padding-left: 40px;
  border-bottom: 1px solid #c8d6e5;
`;

const TodoDateString = styled.h1`
  margin: 0;
  color: #8395a7;
`;

const TodoWeekDay = styled.div`
  color: #485460;
`;

const TodoTasks = styled.div`
  margin-top: 20px;
  font-weight: bold;
  color: #0be881;
`;

const TodoHead = () => {
  const todolist = useTodoState();
  const unDone = todolist.map((todo) => !todo?.done);
  const date = new Date();
  const dateString = date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const weekday = date.toLocaleDateString("ko-KR", { weekday: "long" });
  return (
    <TodoHeadBlock>
      <TodoDateString>{dateString}</TodoDateString>
      <TodoWeekDay>{weekday}</TodoWeekDay>
      <TodoTasks>할 일 {unDone.length}개남음</TodoTasks>
    </TodoHeadBlock>
  );
};

export default TodoHead;
