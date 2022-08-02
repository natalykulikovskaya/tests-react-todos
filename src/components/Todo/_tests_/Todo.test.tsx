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
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(screen.queryByTestId('todo-check-input')).toBeCheked;
  });

  it("is item throw-line name", () => {
    const todo = {
      id: 1,
      name: "aaaa",
      status: true,
    }
    renderWithProviders(<TodoItem todo={todo} />)
    expect(screen.queryByTestId('todo-check-input')).toBeCheked;
    expect(screen.getByTestId('todo-name')).toHaveClass('nameChecked');
  });
});
