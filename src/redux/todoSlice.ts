import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {Todo} from "../type/todo";
import {addTodo, checkAllTodo, deleteTodo, editTodo, fetchTodos,} from "../api/todos";
import {
    ADD_TODO_ERROR,
    DELETE_TODO_ERROR,
    EDIT_TODO_ERROR,
    FETCH_TODOS_ERROR,
    UNVERIFIED_ID_ON_DELETE,
} from "../constants/errors";
import {TabsEnum} from "../type/enum";

const SLICE_TODO = "todos";

type Initial_state_Todo = {
  todos: Todo[];
  isLoading: boolean;
  error: string | null;
  currentTab: TabsEnum;
};

const initialState: Initial_state_Todo = {
  todos: [],
  isLoading: false,
  error: null,
  currentTab: TabsEnum.all,
};

export const fetchTodoSlice = createAsyncThunk(
  `${SLICE_TODO}/fetchTodos`,
  async (_, { rejectWithValue }) => {
    try {
      return await fetchTodos();
    } catch (e) {
      const actualError = e as AxiosError;
      return rejectWithValue(actualError.message);
    }
  }
);

export const addTodoSlice = createAsyncThunk(
  `${SLICE_TODO}/addTodo`,
  async (todo: Todo, { rejectWithValue }) => {
    try {
      return await addTodo(todo);
    } catch (e) {
      const actualError = e as AxiosError;
      return rejectWithValue(actualError.message);
    }
  }
);

export const deleteTodoSlice = createAsyncThunk(
  `${SLICE_TODO}/deleteTodo`,
  async (todo: Todo, { rejectWithValue }) => {
    try {
      if (todo?._id) {
        return await deleteTodo(todo?._id);
      } else throw Error(UNVERIFIED_ID_ON_DELETE);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const editTodoSlice = createAsyncThunk(
  `${SLICE_TODO}/editTodo`,
  async (todo: Todo, { rejectWithValue }) => {
    try {
      return await editTodo(todo);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const checkAllTodoSlice = createAsyncThunk(
  `${SLICE_TODO}/checkAllTodo`,
  async (checkAll: boolean, { rejectWithValue }) => {
    try {
      return await checkAllTodo(checkAll);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const { actions, reducer } = createSlice({
  name: SLICE_TODO,
  initialState,
  reducers: {
      setCurrentTab(state, { payload }){
          state.currentTab = payload;
      }
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTodoSlice.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTodoSlice.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.todos = payload;
        state.error = null;
      })
      .addCase(fetchTodoSlice.rejected, (state) => {
        state.isLoading = false;
        state.error = FETCH_TODOS_ERROR;
      })
      .addCase(addTodoSlice.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTodoSlice.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.todos = [...state.todos, payload];
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
      .addCase(deleteTodoSlice.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.todos = state.todos.filter(({ _id }) => _id !== payload?._id);
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
      .addCase(editTodoSlice.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.todos = state.todos.map((item) =>
          item?._id === payload?._id ? payload : item
        );
        state.error = null;
      })
      .addCase(editTodoSlice.rejected, (state) => {
        state.isLoading = false;
        state.error = EDIT_TODO_ERROR;
      })
      .addCase(checkAllTodoSlice.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(checkAllTodoSlice.fulfilled, (state) => {
        state.isLoading = false;
        state.todos = state.todos.map((item) => ({
          ...item,
          status: !item.status,
        }));
        state.error = null;
      })
      .addCase(checkAllTodoSlice.rejected, (state) => {
        state.isLoading = false;
        state.error = EDIT_TODO_ERROR;
      }),
});

export const { setCurrentTab } = actions
