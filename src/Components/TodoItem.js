import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdCancel, MdCheck, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "../TodoProvider";

const CircleChecked = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  border: 1px solid #808e9b;

  ${(props) =>
    props.done &&
    css`
      border: 1px solid #0be881;
      color: #0be881;
    `}
`;

const Remove = styled.div`
  display: none;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #e74c3c;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;

  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const Text = styled.div`
  font-size: 18px;
  flex: 1;
  ${(props) =>
    props.done &&
    css`
      color: #d2dae2;
    `}
`;

const TodoEditContainer = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`;

const TodoEditInput = styled.input`
  flex: 1;
  font-size: 16px;
  margin-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
`;

const TodoCancle = styled.div`
  font-size: 24px;
  color: #e74c3c;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const TodoItem = ({ id, text, done }) => {
  //수정 테스트
  const dispatch = useTodoDispatch();
  const [editContent, setEditContent] = useState(text);
  const [isEdit, setIsEdit] = useState(false);

  const onDbClick = () => {
    setIsEdit(!isEdit);
  };

  const onCancel = () => {
    setIsEdit(false);
    setEditContent(text);
  };

  const onChange = (e) => {
    setEditContent(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "EDIT", id, text: editContent });
    setIsEdit(false);
  };

  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });

  return (
    <TodoItemBlock>
      {isEdit ? (
        <TodoEditContainer onSubmit={onSubmit}>
          <TodoEditInput
            placeholder="수정 할 내용을 입력하세요"
            autoFocus
            value={editContent}
            onChange={onChange}
          ></TodoEditInput>
          <TodoCancle onClick={onCancel}>
            <MdCancel></MdCancel>
          </TodoCancle>
        </TodoEditContainer>
      ) : (
        <>
          <CircleChecked onClick={onToggle} done={done}>
            {done && <MdCheck />}
          </CircleChecked>
          <Text done={done} onDoubleClick={onDbClick}>
            {text}
          </Text>
          <Remove onClick={onRemove}>
            <MdDelete></MdDelete>
          </Remove>
        </>
      )}
    </TodoItemBlock>
  );
};

export default TodoItem;
