import { describe, expect, it } from '@jest/globals';
import {screen, render, act, fireEvent} from '@testing-library/react';
import {mockStore, mockStoreEmpty} from "./stub";
import { TestWrap } from "../../../test-utils";
import { Todos } from "../Todos";

const initialStore = () => act(() => {
  render (
    <TestWrap customStore={mockStore}>
      <Todos />
      </TestWrap>
  )
})

describe('todos list', () => {
  beforeEach(() => {
    initialStore();
  })

  // it('is exist list if many todos', () => {
  //
  // })

  it('is error if not get list', () => {
    expect(screen.getByText('Ошибка'));
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