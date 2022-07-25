import { describe, expect, it } from '@jest/globals';
import { screen, render } from '@testing-library/react';

import { TestWrap } from "../../../test-utils";
import { AddingTodo } from "../AddingTodo";

describe('addingTodo', () => {
  render (
    <TestWrap>
      <AddingTodo/>
    </TestWrap>
  )

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
    expect(addButton).toHaveBeenCalled()
  })

  it('button disabled if empty input', () => {
    const addButton = screen.getByTestId('add-todo-button');

  })

  it('isAllChecked', () => {
    const allChecked = screen.getByTestId('check-all-todos-checkbox');
    expect(allChecked).toBe(true)
  })

  it('if check all Checkbox - checked all todos', () => {
    const allChecked = screen.getByTestId('check-all-todos-checkbox');
  })

  it('if click add button - todos is in todos array', () => {
    const allChecked = screen.getByTestId('check-all-todos-checkbox');
    const todos = [] as string[];
    expect(todos).toContain(allChecked?.nodeValue);
  })
})