import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { AppStore, State } from "./redux/store";
import { reducer as todosReducer } from "./redux/todoSlice";
import {TabsEnum} from "./type/enum";

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<State>
  store?: AppStore
}

export function renderWithProviders(
    ui: React.ReactElement,
    {
      preloadedState = {todos: { todos: [], isLoading: false, error: null, currentTab: TabsEnum.all}},
      // Automatically create a store instance if no store was passed in
      store = configureStore({ reducer: { todos: todosReducer }, preloadedState }),
      ...renderOptions
    }: ExtendedRenderOptions = {}
) {
    // eslint-disable-next-line @typescript-eslint/ban-types
  function Wrapper({ children }: PropsWithChildren<{}>): React.ReactElement {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}