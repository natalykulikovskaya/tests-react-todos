import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import { errorSelector, isLoadingSelector, todosSelector } from "../../redux/todosSelector";
import className from './Todos.module.scss';
import { deleteTodoSlice, fetchTodoSlice } from "../../redux/todoSlice";
import { AppDispatch } from "../../redux/store";
import { Todo } from "../../type/todo";


export const Todos = () => {
    const todos = useSelector(todosSelector);
    const isLoading = useSelector(isLoadingSelector);
    const error = useSelector(errorSelector);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchTodoSlice());
    }, [dispatch])

    const deleteTodo = useCallback((todo: Todo) => {
        dispatch(deleteTodoSlice(todo))
    }, [dispatch])

    return (
    <ul className={className.lists}>
        {isLoading && <h6>...Загрузка</h6>}
        {!!error && <h6>{error}</h6>}
        {todos?.map((todo) => {
            const {id, name, status} = todo;
            return (
              <li key={id} className={className.todo}>
                  <input type="checkbox" className={className.check} checked={status}/>
                  <span className={className.name}>{name}</span>
                  <button type="button" className={className.delete} onClick={() => deleteTodo(todo)}>x</button>
              </li>
            )
        })}
    </ul>
    )
}