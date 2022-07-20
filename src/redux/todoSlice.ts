import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../type/todo";
import { addTodo, deleteTodo, editTodo, fetchTodos } from "../api/todos";

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

const fetchTodoSlice = createAsyncThunk(`${SLICE_TODO}`, async (_, {rejectWithValue}) => {
    try {
        return fetchTodos();
    } catch (e){
        return rejectWithValue(e);
    }
});

const addTodoSlice = createAsyncThunk(`${SLICE_TODO}`, async (todo:Todo, {rejectWithValue}) => {
    try {
        return addTodo(todo);
    } catch (e){
        return rejectWithValue(e);
    }
});

const deleteTodoSlice = createAsyncThunk(`${SLICE_TODO}`, async (todo:Todo, {rejectWithValue}) => {
    try {
        return deleteTodo(todo?.id);
    } catch (e){
        return rejectWithValue(e);
    }
});

const editTodoSlice = createAsyncThunk(`${SLICE_TODO}`, async (todo:Todo, {rejectWithValue}) => {
    try {
        return editTodo(todo);
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
        })
        .addCase(fetchTodoSlice.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.todos = [
                {id: 'qqq', name:'sdfsdf', status: false},
                {id: 'www', name:'sdfsdf', status: false},
                {id: 'eee', name:'sdfsdf', status: false},
                {id: 'aaaa', name:'sdfsdf', status: false},
            ];
        })
        .addCase(fetchTodoSlice.rejected, (state) => {
            state.isLoading = false;
            state.error = 'Ошибка получения todos'
        })
        .addCase(addTodoSlice.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(addTodoSlice.fulfilled, (state) => {
            state.isLoading = false;
        })
        .addCase(addTodoSlice.rejected, (state) => {
            state.isLoading = false;
        })
        .addCase(deleteTodoSlice.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteTodoSlice.fulfilled, (state) => {
            state.isLoading = false;
        })
        .addCase(deleteTodoSlice.rejected, (state) => {
            state.isLoading = false;
        })
        .addCase(editTodoSlice.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(editTodoSlice.fulfilled, (state) => {
            state.isLoading = false;
        })
        .addCase(editTodoSlice.rejected, (state) => {
            state.isLoading = false;
        })
})