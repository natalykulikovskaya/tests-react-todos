import React from 'react';
import { Todos } from "./components/Todos/Todos";
import { Layout } from "./components/Layout";
import { AddingTodo } from "./components/AddingTodo";
import className from './App.module.scss';

function App() {
  return (
    <Layout>
      <main className={className.container}>
        <AddingTodo />
        <Todos />
      </main>
    </Layout>
  );
}

export default App;
