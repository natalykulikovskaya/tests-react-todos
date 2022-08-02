import React from "react";
import {
  describe,
  expect,
  it,
} from "@jest/globals";
import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../test-utils";
import { Todos } from "../Todos";
import {mockStoreEmpty, mockStoreLoading} from './stub'

describe("todos list", () => {

  it("is list", () => {
    renderWithProviders(<Todos />)
    expect(screen.findByRole('list')).toBeDefined()
  });

  it("is not list", () => {
    renderWithProviders(<Todos />, { preloadedState: mockStoreEmpty })
    expect(screen.queryByRole('list')).toBeFalsy()
  });

  it("is error", () => {
    renderWithProviders(<Todos />, { preloadedState: mockStoreEmpty })
    expect(screen.findByText('Ошибка')).toBeTruthy()
  });

  it("is loader", () => {
    renderWithProviders(<Todos />, { preloadedState: mockStoreLoading })
    expect(screen.findByText(/Загрузка/)).toBeTruthy()
  });
});

export {};
