import { describe, it } from "@jest/globals";
import { screen, render} from "@testing-library/react";

import { Header } from '../Header'
import {TestWrap} from "../../../test-utils";

describe('header-test', () => {
  it('is header text', () => {
    render(
      <TestWrap>
      <Header />
      </TestWrap>
    )
    expect(screen.getByTestId('text-header').textContent).toBe('Добро пожаловать. Ставьте цели и достигайте их!');
  })
})