import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 512px;
  height: 768px;
  background-color: white;
  margin: 0px auto;
  margin-bottom: 50px;
  margin-top: 24px;
  border-radius: 16px;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.2);
`;

const TodoTemplate = ({ children }) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TodoTemplate;
