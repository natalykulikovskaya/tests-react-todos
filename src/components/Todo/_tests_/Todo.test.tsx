import { describe, it, expect } from "@jest/globals";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithProviders } from "../../../test-utils";

import { TodoItem } from "../Todo";

describe("todo item block", () => {
  it("item checkbox change if click on it", () => {
    const todo = {
      id: 1,
      name: "aaaa",
      status: false,
    }
    renderWithProviders(<TodoItem todo={todo} />)

    userEvent.click(screen.getByTestId('todo-check-input'));
    expect(screen.queryByTestId('todo-check-input')).toBeCheked;
  });

  it("item has throw-line class then checkbox is checked", () => {
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
