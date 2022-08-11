import {TabsEnum} from "../../../type/enum";

export const mockStore = {
  todos: {
    todos: [{
      id: 1,
      name: 'aaaa',
      status: false,
    }],
    isLoading: false,
    error: null,
    currentTab: TabsEnum.all,
  },
};

export const emptyListMockStore = {
  todos: {
    todos: [],
    isLoading: false,
    error: null,
    currentTab: TabsEnum.all
  },
}