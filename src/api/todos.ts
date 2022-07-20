import { axiosInstance } from "./instance";
import { AxiosResponse } from "axios";
import { Todo } from "../type/todo";

export const fetchTodos = async (): Promise<Todo[]> => {
    try {
        const url = `/todos`
        const result = await axiosInstance.get(url);
        return result?.data;
    } catch (e){
        throw e;
    }
}


export const addTodo = async (todo: Todo): Promise<Todo> => {
    try {
        const url = `/add-todo`
        const result = await axiosInstance.post(url, todo);
        return result?.data;
    } catch (e){
        throw e;
    }
}

export const deleteTodo = async (id: string): Promise<Todo> => {
    try {
        const url = `/add-todo/${id}`
        const result = await axiosInstance.delete(url);
        return result?.data;
    } catch (e){
        throw e;
    }
}

export const editTodo = async (todo: Todo): Promise<Todo> => {
    try {
        const url = `/change-todo:${todo?.id}`
        const result = await axiosInstance.put(url, todo);
        return result?.data;
    } catch (e){
        throw e;
    }
}


export const checkAllTodo = async (todos: Todo): Promise<AxiosResponse<Todo>> => {
    try {
        const url = `/change-todo`
        const result = await axiosInstance.put(url, todos);
        return result?.data;
    } catch (e){
        throw e;
    }
}