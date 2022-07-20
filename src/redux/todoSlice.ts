import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Todo } from "../type/todo";
import { addTodo, deleteTodo, editTodo, fetchTodos } from "../api/todos";
import {
    ADD_TODO_ERROR,
    DELETE_TODO_ERROR,
    EDIT_TODO_ERROR,
    FETCH_TODOS_ERROR,
    UNVERIFIED_ID_ON_DELETE
} from "../constants/errors";

const SLICE_TODO = 'todos';

type Initial_state_Todo = {
    todos: Todo[];
    isLoading: boolean;
    error: string | null;
}

const initialState: Initial_state_Todo = {
    todos: [],
    isLoading: false,
    error: null,
}

export const fetchTodoSlice = createAsyncThunk(`${SLICE_TODO}/fetchTodos`, async (_, {rejectWithValue}) => {
    try {
        return await fetchTodos();
    } catch (e){
        return rejectWithValue(e);
    }
});

export const addTodoSlice = createAsyncThunk(`${SLICE_TODO}/addTodo`, async (todo:Todo, {rejectWithValue}) => {
    try {
        return await addTodo(todo);
    } catch (e){
        return rejectWithValue(e);
    }
});

export const deleteTodoSlice = createAsyncThunk(`${SLICE_TODO}/deleteTodo`, async (todo:Todo, {rejectWithValue}) => {
    try {
        if(todo?.id){
            return await deleteTodo(todo?.id);
        }
       else throw Error(UNVERIFIED_ID_ON_DELETE)
    } catch (e){
        return rejectWithValue(e);
    }
});

export const editTodoSlice = createAsyncThunk(`${SLICE_TODO}/editTodo`, async (todo:Todo, {rejectWithValue}) => {
    try {
        return await editTodo(todo);
    } catch (e){
        return rejectWithValue(e);
    }
});

export const {actions, reducer} = createSlice({
    name: SLICE_TODO,
    initialState,
    reducers: {},
    extraReducers: (builder) => builder
        .addCase(fetchTodoSlice.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchTodoSlice.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.todos = [
                {id: 'qqq', name:'sdfsdf', status: false},
                {id: 'www', name:'sdfsdf', status: false},
                {id: 'eee', name:'sdfsdf', status: false},
                {id: 'aaaa', name:'sdfsdf', status: false},
            ];
            state.error = null;
        })
        .addCase(fetchTodoSlice.rejected, (state) => {
            state.isLoading = false;
            state.error = FETCH_TODOS_ERROR
        })
        .addCase(addTodoSlice.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(addTodoSlice.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
        })
        .addCase(addTodoSlice.rejected, (state) => {
            state.isLoading = false;
            state.error = ADD_TODO_ERROR;
        })
        .addCase(deleteTodoSlice.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(deleteTodoSlice.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
        })
        .addCase(deleteTodoSlice.rejected, (state) => {
            state.isLoading = false;
            state.error = DELETE_TODO_ERROR;
        })
        .addCase(editTodoSlice.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(editTodoSlice.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
        })
        .addCase(editTodoSlice.rejected, (state) => {
            state.isLoading = false;
            state.error = EDIT_TODO_ERROR;
        })
})