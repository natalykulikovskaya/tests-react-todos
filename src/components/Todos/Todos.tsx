import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { errorSelector, isLoadingSelector, todosSelector } from "../../redux/todosSelector";
import { fetchTodoSlice } from "../../redux/todoSlice";
import { AppDispatch } from "../../redux/store";

import className from './Todos.module.scss';
import {TodoItem} from "../Todo";

export const Todos = () => {
    const todos = useSelector(todosSelector);
    const isLoading = useSelector(isLoadingSelector);
    const error = useSelector(errorSelector);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchTodoSlice());
    }, [dispatch])

    return (
    <ul className={className.lists} data-test-id="todo-ul">
        {isLoading && <h6>...Загрузка</h6>}
        {!!error && <h6>{error}</h6>}
        {todos?.map((todo) => {
            return (
              <TodoItem key={todo?._id} todo={todo} />
            )
        })}
    </ul>
    )
}