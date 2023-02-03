import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import styled, { css } from "styled-components";
import { useTodoDispatch, useTodoNextId } from "../TodoProvider";

const TodoCreateBlock = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 85px;
  height: 85px;
  border-radius: 50%;
  background-color: #0be881;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #fff;
  transition: 0.25s all ease-in;
  transform: translate(-50%, 50%);
  cursor: pointer;

  &:hover {
    background-color: #1dd1a1;
  }

  &:active {
    background-color: #2ecc71;
  }

  ${(props) =>
    props.toggle &&
    css`
      background-color: #ff6b6b;
      transform: translate(-50%, 50%) rotate(45deg);
      &:hover {
        background-color: #ff4757;
      }

      &:active {
        background-color: #ee5253;
      }
    `}
`;

const InsertWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InsertContainer = styled.form`
  border-top: 1px solid #c8d6e5;
  background-color: #ecf0f1;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding-top: 32px;
  padding-bottom: 50px;
  padding-left: 32px;
  padding-right: 32px;
`;

const Input = styled.input`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  border-radius: 5px;
  border: none;
`;

const TodoCreate = () => {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");
  const onToggle = () => setToggle((current) => !current);

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: text,
        done: false,
      },
    });
    nextId.current += 1;
    setToggle(false);
    setText("");
  };

  return (
    <>
      {toggle && (
        <InsertWrapper onSubmit={onSubmit}>
          <InsertContainer>
            <Input
              autoFocus
              placeholder="할 일을 입력하세요."
              value={text}
              onChange={onChange}
            ></Input>
          </InsertContainer>
        </InsertWrapper>
      )}
      <TodoCreateBlock toggle={toggle} onClick={onToggle}>
        <MdAdd></MdAdd>
      </TodoCreateBlock>
    </>
  );
};

export default TodoCreate;
