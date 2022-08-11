import { describe, expect, it } from '@jest/globals';
import {screen, fireEvent} from '@testing-library/react';

import { renderWithProviders } from "../../../test-utils";
import { AddingTodo } from "../AddingTodo";
import { mockStore, emptyListMockStore } from "./stub";
import React from "react";

describe('block with checkbox all, input and add button', () => {
  beforeEach(() => {
    renderWithProviders(<AddingTodo />, { preloadedState: mockStore })
  })

   it('is show  add button on page', () => {
    const addButton = screen.getByTestId('add-todo-button');
    expect(addButton).toBeDefined()
  })

  it('is show input on page', () => {
    const input = screen.getByTestId('add-todo-input');
    expect(input).toBeDefined()
  })

  it('if enter in input some not empty value then add button is active', () => {
    const addButton = screen.getByTestId('add-todo-button');
    const input = screen.getByTestId('add-todo-input');
    fireEvent.change(input, { target: { value: "some" } });
    expect(addButton).toHaveProperty('disabled', false)
  })

  it('if enter in input empty value then add button is block', () => {
    const addButton = screen.getByTestId('add-todo-button');
    const input = screen.getByTestId('add-todo-input');
    fireEvent.change(input, { target: { value: "" } });
    expect(addButton).toHaveProperty('disabled', true)
  })

  it('if click on all todos checkbox is state change', () => {
    const allCheckedCheckbox = screen.getByTestId('check-all-todos-checkbox') as HTMLInputElement;
    expect(allCheckedCheckbox).toBeInTheDocument();
    expect(allCheckedCheckbox).toHaveProperty('disabled', false)
    fireEvent.change(allCheckedCheckbox, { target: { checked: true } });
    expect(allCheckedCheckbox).toBeTruthy();
  })
})

it('all todos checkbox block if not todos list', () => {
    renderWithProviders(<AddingTodo />, { preloadedState: emptyListMockStore })
  const allCheckedCheckbox = screen.getByTestId('check-all-todos-checkbox') as HTMLInputElement;
  expect(allCheckedCheckbox).toBeInTheDocument();
  expect(allCheckedCheckbox).toHaveProperty('disabled', true)
})