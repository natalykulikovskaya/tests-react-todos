import { describe, it, expect } from "@jest/globals";
import { screen } from "@testing-library/react";

import { Header } from "../Header";
import { renderWithProviders } from "../../../test-utils";

describe("header block", () => {
  it("in header exist text welcome", () => {
    renderWithProviders(<Header />);
    expect(screen.getByTestId("text-header").textContent).toBe(
      "Добро пожаловать. Ставьте цели и достигайте их!"
    );
  });
});
