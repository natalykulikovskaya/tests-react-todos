import React from "react";
import { Provider } from "react-redux";

import configureStore from 'redux-mock-store';

type TestProps = {
  children?: React.ReactNode;
  customStore?: any;
};

const middlewares: any = [];
const mockStore = configureStore(middlewares);


/** Обертка для прокидывания мокового стора со всеми необходимыми провайдерами */
export const TestWrap = ({ children, customStore = {} }: TestProps) => {

  return (
    <Provider store={mockStore (customStore)}>
      {children}
    </Provider>
  )
}