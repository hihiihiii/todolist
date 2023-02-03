import { createContext, useContext, useReducer, useRef } from "react";

// const initalTodos = [
//   {
//     id: 1,
//     text: "State Management",
//     done: true,
//   },
//   {
//     id: 2,
//     text: "Learn TypeScript",
//     done: false,
//   },
//   {
//     id: 3,
//     text: "Learn NodeJS",
//     done: false,
//   },
// ];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.todo];
    case "TOGGLE":
      return state?.map((todo) =>
        todo?.id === action?.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state?.filter((todo) => todo?.id !== action?.id);
    case "EDIT":
      return state?.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    default:
      throw new Error("에러가 발생했습니다.");
  }
};

//state Context
const TodoStateContext = createContext();

//Dispatch Context
const TodoDispatchContext = createContext();

//Id Context
const TodoNextIdContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, []);
  const nextId = useRef(5);

  return (
    <>
      <TodoStateContext.Provider value={state}>
        <TodoDispatchContext.Provider value={dispatch}>
          <TodoNextIdContext.Provider value={nextId}>
            {children}
          </TodoNextIdContext.Provider>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </>
  );
};

export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Context Error");
  }
  return context;
};

export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Context Error");
  }
  return context;
};

export const useTodoNextId = () => {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Context Error");
  }
  return context;
};
