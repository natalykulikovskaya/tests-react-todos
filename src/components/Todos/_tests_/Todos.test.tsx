import React from "react";
import {
  describe,
  expect,
  it,
} from "@jest/globals";
import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../test-utils";
import { Todos } from "../Todos";
import { mockStoreEmpty, mockStoreLoading } from './stub'

describe("todos list block", () => {

  it("if list have items than it exist on page", () => {
    renderWithProviders(<Todos />)
    expect(screen.findByRole('list')).toBeDefined()
  });

  it("if list empty than it hide from page", () => {
    renderWithProviders(<Todos />, { preloadedState: mockStoreEmpty })
    expect(screen.queryByRole('list')).toBeFalsy()
  });

  it("if exit error after get todos show it on page", () => {
    renderWithProviders(<Todos />, { preloadedState: mockStoreEmpty })
    expect(screen.findByText('Ошибка')).toBeTruthy()
  });

  it("show loader if todos request already not finally", () => {
    renderWithProviders(<Todos />, { preloadedState: mockStoreLoading })
    expect(screen.findByText(/Загрузка/)).toBeTruthy()
  });
});
