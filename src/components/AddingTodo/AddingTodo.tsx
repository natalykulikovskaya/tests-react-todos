import {useDispatch, useSelector} from "react-redux";
import React, { ChangeEvent, useState } from "react";

import {AppDispatch} from "../../redux/store";
import {addTodoSlice, checkAllTodoSlice} from "../../redux/todoSlice";

import className from './AddingTodo.module.scss';
import {todosSelector} from "../../redux/todosSelector";

export const AddingTodo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector(todosSelector);
  const [inputValue, setInputValue] = useState('');
  const [checkAll, setCheckAll] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {target: { value } } = e;
    setInputValue(value);
  }

  const addTodo = () => {
    dispatch(addTodoSlice({ name: inputValue, status: false }))
  }

  const checkAllTodos = () => {
    setCheckAll(prevState => !prevState);
    dispatch(checkAllTodoSlice(checkAll));
  }

  return (
    <div className={className.container}>
      <input type="checkbox" onChange={checkAllTodos} checked={checkAll} className={className.check}/>
      <div className={className.inputWrapper}>
        <label htmlFor="add-new-todo" className={className.label}>Введите новую цель</label>
        <input id="add-new-todo" className={className.enterTodo} type="text" value={inputValue} onChange={(e) => handleChange(e)}/>
      </div>
      <button type="button" className={className.addButton} onClick={addTodo}>Add</button>
    </div>

  )
}