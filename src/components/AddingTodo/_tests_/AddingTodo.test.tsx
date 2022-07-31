import { describe, expect, it } from '@jest/globals';
import {screen, render, act, fireEvent} from '@testing-library/react';

import { TestWrap } from "../../../test-utils";
import { AddingTodo } from "../AddingTodo";
import { mockStore } from "./stub";

describe('addingTodo', () => {
  beforeEach(() => {
    act(() => {
      render(
        <TestWrap customStore={mockStore}>
          <AddingTodo/>
        </TestWrap>
      )
    })
  })

   it('is exist add button', () => {
    const addButton = screen.getByTestId('add-todo-button');
    expect(addButton).toBeDefined()
  })

  it('is exist input', () => {
    const input = screen.getByTestId('add-todo-input');
    expect(input).toBeDefined()
  })

  it('button activity if full input', () => {
    const addButton = screen.getByTestId('add-todo-button');
    const input = screen.getByTestId('add-todo-input');
    fireEvent.change(input, { target: { value: "some" } });
    expect(addButton).toHaveProperty('disabled', false)
  })

  it('button disabled if empty input', () => {
    const addButton = screen.getByTestId('add-todo-button');
    const input = screen.getByTestId('add-todo-input');
    fireEvent.change(input, { target: { value: "" } });
    expect(addButton).toHaveProperty('disabled', true)
  })

  it('isAllChecked', () => {
    const allChecked = screen.getByTestId('check-all-todos-checkbox');
    fireEvent.change(allChecked, { target: { checked: true } });
  })
})