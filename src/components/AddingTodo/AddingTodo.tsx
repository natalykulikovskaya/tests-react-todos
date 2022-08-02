import { useDispatch } from "react-redux";
import React, { ChangeEvent, useState } from "react";

import { AppDispatch } from "../../redux/store";
import { addTodoSlice, checkAllTodoSlice } from "../../redux/todoSlice";

import className from "./AddingTodo.module.scss";

export const AddingTodo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputValue] = useState("");
  const [checkAll, setCheckAll] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setInputValue(value);
  };

  const addTodo = () => {
    dispatch(addTodoSlice({ name: inputValue.trim(), status: false }));
  };

  const checkAllTodos = () => {
    setCheckAll((prevState) => !prevState);
    dispatch(checkAllTodoSlice(checkAll));
  };

  return (
    <div className={className.container}>
      <input
        type="checkbox"
        onChange={checkAllTodos}
        checked={checkAll}
        className={className.check}
        data-testid="check-all-todos-checkbox"
      />
      <div className={className.inputWrapper}>
        <label
          htmlFor="add-new-todo"
          className={className.label}
          data-testid="add-input-label"
        >
          Введите новую цель
        </label>
        <input
          id="add-new-todo"
          className={className.enterTodo}
          type="text"
          value={inputValue}
          onChange={(e) => handleChange(e)}
          data-testid="add-todo-input"
        />
      </div>
      <button
        data-testid="add-todo-button"
        type="button"
        className={className.addButton}
        onClick={addTodo}
        disabled={!inputValue.trim()}
      >
        Add
      </button>
    </div>
  );
};
