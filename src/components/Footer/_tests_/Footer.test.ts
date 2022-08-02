import { describe, it, expect } from "@jest/globals";
import { screen } from "@testing-library/react";

describe("footer", () => {
  it("is text footer", () => {
    expect(screen.findByText("Автор: Куликовская Н.А.")).toBeTruthy();
  });
});
