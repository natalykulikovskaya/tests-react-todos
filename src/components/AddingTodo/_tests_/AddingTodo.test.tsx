import { describe, expect, it } from '@jest/globals';
import {screen, render, act, fireEvent} from '@testing-library/react';

import { TestWrap } from "../../../test-utils";
import { AddingTodo } from "../AddingTodo";
import { mockStore } from "./stub";

const initialStore = () => act(() => {
  render (
    <TestWrap customStore={mockStore}>
      <AddingTodo/>
    </TestWrap>
  )
})

describe('addingTodo', () => {
   it('is exist add button', () => {
     initialStore();
    const addButton = screen.getByTestId('add-todo-button');
    expect(addButton).toBeDefined()
  })

  it('is exist input', () => {
    initialStore();
    const input = screen.getByTestId('add-todo-input');
    expect(input).toBeDefined()
  })

  it('button activity if full input', () => {
    initialStore();
    const addButton = screen.getByTestId('add-todo-button');
    const input = screen.getByTestId('add-todo-input');
    fireEvent.change(input, { target: { value: "some" } });
    expect(addButton).toHaveProperty('disabled', false)
  })

  it('button disabled if empty input', () => {
    initialStore();
    const addButton = screen.getByTestId('add-todo-button');
    const input = screen.getByTestId('add-todo-input');
    fireEvent.change(input, { target: { value: "" } });
    expect(addButton).toHaveProperty('disabled', true)
  })

  it('isAllChecked', () => {
    initialStore();
    const allChecked = screen.getByTestId('check-all-todos-checkbox');
    fireEvent.change(allChecked, { target: { checked: true } });
  })
})