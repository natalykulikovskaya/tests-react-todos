export const mockStore = {
  todos: {
    todos: [
      {
        id: 1,
        name: "aaaa",
        status: false,
      },
    ],
    isLoading: false,
    error: false,
  },
};

export const mockStoreEmpty = {
  todos: {
    todos: [],
    isLoading: false,
    error: "Ошибка",
  },
};

export const mockStoreLoading = {
  todos: {
    todos: [],
    isLoading: true,
    error: null,
  },
};
