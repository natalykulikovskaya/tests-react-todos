import { describe, it, expect } from "@jest/globals";
import { screen } from "@testing-library/react";

describe('block footer', () => {
  it('in footer is text author', () => {
    expect(screen.findByText(/автор/i)).toBeTruthy();
  })
})