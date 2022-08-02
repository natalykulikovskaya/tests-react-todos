import { useCallback } from "react";
import cn from "classnames";
import { useDispatch } from "react-redux";

import className from "../Todos/Todos.module.scss";
import { Todo } from "../../type/todo";

import { deleteTodoSlice, editTodoSlice } from "../../redux/todoSlice";
import { AppDispatch } from "../../redux/store";

type Props = {
  todo: Todo;
};

export const TodoItem = ({ todo }: Props) => {
  const { _id, name, status } = todo;
  const dispatch = useDispatch<AppDispatch>();

  const deleteTodo = useCallback(
    (todo: Todo) => {
      dispatch(deleteTodoSlice(todo));
    },
    [dispatch]
  );

  const changeCheckState = (todo: Todo) => {
    const editTodo = { ...todo, status: !status };
    dispatch(editTodoSlice(editTodo));
  };

  return (
    <li key={_id} className={className.todo} data-test-id="todo-li">
      <input
        type="checkbox"
        className={className.check}
        checked={status}
        onChange={() => changeCheckState({ _id, name, status })}
        data-testid="todo-check-input"
      />
      <span
        className={cn(className.name, status && className.nameChecked)}
        data-testid="todo-name"
      >
        {name}
      </span>
      <button
        type="button"
        className={className.delete}
        onClick={() => deleteTodo({ _id, name, status })}
        data-testid="todo-delete"
      >
        x
      </button>
    </li>
  );
};
