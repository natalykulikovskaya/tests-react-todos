import { State } from "./store";
import {createSelector} from "@reduxjs/toolkit";

export const todosSliceSelector = (state: State) => state.todos

export const todosSelector = createSelector(todosSliceSelector, (state) => state.todos ?? [])

export const isLoadingSelector = createSelector(todosSliceSelector, (state) => state.isLoading)

export const errorSelector = createSelector(todosSliceSelector, (state) => state.error)