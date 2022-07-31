import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import cn from 'classnames'

import { errorSelector, isLoadingSelector, todosSelector } from "../../redux/todosSelector";
import { deleteTodoSlice, editTodoSlice, fetchTodoSlice } from "../../redux/todoSlice";
import { AppDispatch } from "../../redux/store";
import { Todo } from "../../type/todo";

import className from './Todos.module.scss';

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

    const changeCheckState = (todo: Todo) => {
        const editTodo = {...todo, status: !todo?.status}
        dispatch(editTodoSlice(editTodo))
    }

    return (
    <ul className={className.lists} data-test-id="todo-ul">
        {isLoading && <h6>...Загрузка</h6>}
        {!!error && <h6>{error}</h6>}
        {todos?.map((todo) => {
            const {_id, name, status} = todo;
            return (
              <li key={_id} className={className.todo} data-test-id="todo-li">
                  <input type="checkbox" className={className.check} checked={status} onChange={() => changeCheckState(todo)} data-testid="todo-check-input"/>
                  <span className={cn(className.name, status && className.nameChecked)} data-testid="todo-name">{name}</span>
                  <button type="button" className={className.delete} onClick={() => deleteTodo(todo)} data-testid="todo-delete">x</button>
              </li>
            )
        })}
    </ul>
    )
}