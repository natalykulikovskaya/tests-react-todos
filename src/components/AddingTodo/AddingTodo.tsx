import React, { ChangeEvent, useState } from "react";
import className from './AddingTodo.module.scss';
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {addTodoSlice} from "../../redux/todoSlice";

export const AddingTodo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {target: { value } } = e;
    setInputValue(value);
  }

  const addTodo = () => {
    dispatch(addTodoSlice({ name: inputValue, status: false }))
  }

  return (
    <div className={className.container}>
      <label htmlFor="add-new-todo" className={className.label}>Введите новую цель</label>
        <input id="add-new-todo" className={className.enterTodo} type="text" value={inputValue} onChange={(e) => handleChange(e)}/>
      <button type="button" className={className.addButton} onClick={addTodo}>Add</button>
    </div>

  )
}