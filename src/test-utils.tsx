import React from "react";
import { Provider } from "react-redux";

import { store } from "./redux/store";


type TestProps = {
  children?: React.ReactNode;
  customStore?: any;
};

/** Обертка для прокидывания мокового стора со всеми необходимыми провайдерами */
export const TestWrap = ({ children, customStore = {} }: TestProps) => (
    <Provider store={store}>
      {children}
    </Provider>
)