import React, { ChangeEvent, useState } from "react";
import className from './AddingTodo.module.scss';

export const AddingTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {target: { value } } = e;
    setInputValue(value);
  }

  return (
    <div className={className.container}>
      <label htmlFor="add-new-todo" className={className.label}>Введите новую цель</label>
        <input id="add-new-todo" className={className.enterTodo} type="text" value={inputValue} onChange={(e) => handleChange(e)}/>
      <button type="button" className={className.addButton}>Add</button>
    </div>

  )
}