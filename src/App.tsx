import React from "react";
import { Provider } from "react-redux";

import { Todos } from "./components/Todos/Todos";
import { Layout } from "./components/Layout";
import { AddingTodo } from "./components/AddingTodo";
import className from "./App.module.scss";
import { store } from "./redux/store";
import { Tabs } from "./components/Tabs";
import { Statistic } from "./components/Statistic";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <main className={className.container}>
          <AddingTodo />
          <Todos />
          <Statistic />
          <Tabs />
        </main>
      </Layout>
    </Provider>
  );
}

export default App;
