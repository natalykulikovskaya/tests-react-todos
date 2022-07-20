import {configureStore, Store} from "@reduxjs/toolkit";
import { reducer as todos } from './todoSlice';

export const store  = configureStore ({
    reducer: {
        todos,
    }
})

export type State = ReturnType<Store['getState']>;