import { useDispatch, useSelector } from "react-redux";
import {useCallback, useEffect} from "react";

import {
  currentTabSelector,
  errorSelector,
  isLoadingSelector,
  todosSelector,
} from "../../redux/todosSelector";
import { fetchTodoSlice } from "../../redux/todoSlice";
import { AppDispatch } from "../../redux/store";

import className from "./Todos.module.scss";
import { TodoItem } from "../Todo";

export const Todos = () => {
  const todos = useSelector(todosSelector);
  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTodoSlice());
  }, [dispatch]);

  return (
    <div className={className.container}>
      {isLoading && <h6>...Загрузка</h6>}
      {!!error && <h6>{error}</h6>}
      {todos?.map((todo) => (
        <ul key={todo?._id} className={className.lists} data-test-id="todo-ul" >
        <TodoItem todo={todo} />
        </ul>
      ))}
    </div>
  );
};
