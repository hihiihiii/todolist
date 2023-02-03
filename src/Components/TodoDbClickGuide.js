import React from "react";
import styled from "styled-components";

const TodoDbClickBlock = styled.div`
  text-align: center;
  font-size: 20px;
  opacity: 0.4;
`;

const TodoDbClickGuide = () => {
  return <TodoDbClickBlock>더블 클릭시 수정 가능!</TodoDbClickBlock>;
};

export default TodoDbClickGuide;
