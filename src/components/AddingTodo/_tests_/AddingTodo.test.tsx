import { describe, expect, it, beforeEach } from "@jest/globals";
import { screen, fireEvent } from "@testing-library/react";

import { renderWithProviders } from "../../../test-utils";
import { AddingTodo } from "../AddingTodo";
import { mockStore } from "./stub";

describe("addingTodo", () => {
  beforeEach(() => {
    renderWithProviders(<AddingTodo/>, {preloadedState: mockStore});
  })

  it("is exist add button", () => {
    const addButton = screen.getByTestId("add-todo-button");
    expect(addButton).toBeDefined();
  });

  it("is exist input", () => {
    const input = screen.getByTestId("add-todo-input");
    expect(input).toBeDefined();
  });

  it("button activity if full input", () => {
    const addButton = screen.getByTestId("add-todo-button");
    const input = screen.getByTestId("add-todo-input");
    fireEvent.change(input, { target: { value: "some" } });
    expect(addButton).toHaveProperty("disabled", false);
  });

  it("button disabled if empty input", () => {
    const addButton = screen.getByTestId("add-todo-button");
    const input = screen.getByTestId("add-todo-input");
    fireEvent.change(input, { target: { value: "" } });
    expect(addButton).toHaveProperty("disabled", true);
  });

  it("isAllChecked", () => {
    const allChecked = screen.getByTestId("check-all-todos-checkbox");
    fireEvent.change(allChecked, { target: { checked: true } });
  });
});
