import { describe, it, expect } from "@jest/globals";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithProviders } from "../../../test-utils";

import { TodoItem } from "../Todo";

describe("todo", () => {
  it("is item", () => {
    const todo = {
      id: 1,
      name: "aaaa",
      status: false,
    }
    renderWithProviders(<TodoItem todo={todo} />)

    userEvent.click(screen.getByTestId('todo-check-input'));
    // @ts-ignore
    expect(screen.queryByTestId('todo-check-input')).toBeCheked;
  });

  it("is item throw-line name", () => {
    const todo = {
      id: 1,
      name: "aaaa",
      status: true,
    }
    renderWithProviders(<TodoItem todo={todo} />)
    // @ts-ignore
    expect(screen.queryByTestId('todo-check-input')).toBeCheked;
    // @ts-ignore
    expect(screen.getByTestId('todo-name')).toHaveClass('nameChecked');
  });
});
