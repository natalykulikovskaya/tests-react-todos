import {TabsEnum} from "../../../type/enum";

export const mockStore = {
  todos: {
    todos: [
      {
        id: 1,
        name: "aaaa",
        status: false,
      },
      {
        id: 2,
        name: "bbbb",
        status: true,
      },
    ],
    isLoading: false,
    error: false,
    currentTab: TabsEnum.all,
  },
};
