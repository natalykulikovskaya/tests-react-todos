import { configureStore } from "@reduxjs/toolkit";
import { reducer as todos } from "./todoSlice";

export const store = configureStore({
  reducer: {
    todos,
  },
});
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = typeof store["dispatch"];
export type State = ReturnType<typeof store["getState"]>;
