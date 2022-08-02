import {TabsEnum} from "../../../type/enum";

export const mockStoreEmpty = {
  todos: {
    todos: [],
    isLoading: false,
    error: "Ошибка",
    currentTab: TabsEnum.all
  },
};

export const mockStoreLoading = {
  todos: {
    todos: [],
    isLoading: true,
    error: null,
    currentTab: TabsEnum.all
  },
};
