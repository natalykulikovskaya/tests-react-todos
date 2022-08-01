import React from "react"
import { describe, expect, it, beforeEach, jest, afterEach } from '@jest/globals'
import { render, act } from '@testing-library/react';
import { mockStore } from "./stub";
import { TestWrap } from "../../../test-utils";
import { Todos } from "../Todos";
import * as ReactRedux from 'react-redux'
import {fetchTodoSlice} from "../../../redux/todoSlice";

describe('todos list', () => {
  const mockDispatch = jest.fn();

  jest.mock('react-redux', () => ({
    // ...jest.requireActual('react-redux'),
    useDispatch: () => mockDispatch
  }));

  beforeEach(() => {

    act(() => {
      render (
          <TestWrap customStore={mockStore}>
            <Todos />
          </TestWrap>
      )
    })
  })

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('is list', () => {
    const spyOnUseDispatch = jest.spyOn(ReactRedux, 'useDispatch')

    expect(mockDispatch).toHaveBeenCalledWith(fetchTodoSlice)

    spyOnUseDispatch.mockRestore()
  })

//   it('is load if get list', () => {
//
//   })
//
//   it('if checkbox checked li text-decoration: line-through', () => {
//     initialStore();
//     const todoChecked = screen.getByTestId('todo-check-input');
//     const textTodoChecked = screen.getByTestId('todo-name');
//     fireEvent.change(todoChecked, { target: { checked: true } });
//     expect(textTodoChecked).toHaveProperty('style', {textDecoration: 'line-through'})
//   })
//
//   it('if button delete li delete from array', () => {
//
//   })

})