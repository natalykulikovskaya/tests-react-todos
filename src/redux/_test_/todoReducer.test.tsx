import { reducer, setCurrentTab, InitialStateTodo, addTodoSlice } from '../todoSlice'
import {TabsEnum} from "../../type/enum";

it('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(
    {
      todos: [],
      isLoading: false,
      error: null,
      currentTab: TabsEnum.all,
    }
  )
})

it('should change state tab', () => {
  const previousState: InitialStateTodo = {
    todos: [],
    isLoading: false,
    error: null,
    currentTab: TabsEnum.all,
  }
  expect(reducer(previousState, setCurrentTab(TabsEnum.complete))).toEqual(
    {todos: [],
      isLoading: false,
      error: null, currentTab: TabsEnum.complete}
  )
})