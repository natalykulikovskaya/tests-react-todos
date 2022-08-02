import { State } from "./store";
import { createSelector } from "@reduxjs/toolkit";
import {TabsEnum} from "../type/enum";

export const todosSliceSelector = (state: State) => state.todos;

export const todosSelector = createSelector(
  todosSliceSelector,
  (state) => {
      switch (state.currentTab){
          case TabsEnum.complete: return state?.todos.filter(({ status }) => status) ?? [];
          case TabsEnum.unComplete: return state?.todos.filter(({ status }) => !status ?? []);
          default: return state?.todos ?? [];
      }
  }
);

export const todosCountSelector = createSelector(
  todosSliceSelector,
  (state) => state?.todos?.length ?? []
);

export const completeSelector = createSelector(
  todosSelector,
  (state) => state?.filter(({ status }) => status === true) ?? []
);

export const completeCountSelector = createSelector(
  completeSelector,
  (state) => state?.length ?? 0
);

export const unCompleteSelector = createSelector(
  todosSelector,
  (state) => state?.filter(({ status }) => status === false) ?? []
);

export const unCompleteCountSelector = createSelector(
  unCompleteSelector,
  (state) => state?.length ?? 0
);

export const isLoadingSelector = createSelector(
  todosSliceSelector,
  (state) => state.isLoading
);

export const errorSelector = createSelector(
  todosSliceSelector,
  (state) => state.error
);

export const currentTabSelector = createSelector(
    todosSliceSelector,
    (state) => state.currentTab
);
