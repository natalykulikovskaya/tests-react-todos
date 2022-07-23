import { AxiosResponse } from "axios";

import { Todo } from "../type/todo";

import { axiosInstance } from "./instance";

export const fetchTodos = async (): Promise<Todo[]> => {
    try {
        const url = `/todo/`
        const result = await axiosInstance.get(url);
        return result?.data;
    } catch (e){
        throw e;
    }
}


export const addTodo = async (todo: Todo): Promise<Todo> => {
    try {
        const url = `/todo/`
        const result = await axiosInstance.post(url, todo);
        return result?.data;
    } catch (e){
        throw e;
    }
}

export const deleteTodo = async (_id: string): Promise<Todo> => {
    try {
        const url = `/todo/${_id}`
        const result = await axiosInstance.delete(url);
        return result?.data;
    } catch (e){
        throw e;
    }
}

export const editTodo = async (todo: Todo): Promise<Todo> => {
    try {
        const url = `/todo/${todo?._id}`
        const result = await axiosInstance.put(url, {name: todo?.name, status: todo?.status});
        return result?.data;
    } catch (e){
        throw e;
    }
}


export const checkAllTodo = async (checkAll: boolean): Promise<AxiosResponse<Todo>> => {
    try {
        const url = `/todo/`
        const result = await axiosInstance.put(url, { status: checkAll });
        return result?.data;
    } catch (e){
        throw e;
    }
}