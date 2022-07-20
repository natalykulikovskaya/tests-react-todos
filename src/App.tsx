import React from 'react';
import { Todos } from "./components/Todos/Todos";
import { Layout } from "./components/Layout";
import { AddingTodo } from "./components/AddingTodo";
import className from './App.module.scss';
import { Provider } from "react-redux";
import { store } from './redux/store';

function App() {
  return (
      <Provider store={store}>
          <Layout>
              <main className={className.container}>
                  <AddingTodo />
                  <Todos />
              </main>
          </Layout>
      </Provider>
  );
}

export default App;
