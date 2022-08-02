import { describe, it, expect } from "@jest/globals";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"

import { TabsEnum } from "../../../type/enum";
import { renderWithProviders } from "../../../test-utils"
import { Tabs } from "../Tabs";


describe("tabs", () => {

  it("active tab", () => {
    renderWithProviders(<Tabs/>);
    userEvent.click(screen.getByTestId(TabsEnum.all));
    expect(screen.getByTestId(TabsEnum.all)).toHaveClass('active');
    userEvent.click(screen.getByTestId(TabsEnum.complete));
    expect(screen.getByTestId(TabsEnum.complete)).toHaveClass('active');
    userEvent.click(screen.getByTestId(TabsEnum.unComplete));
    expect(screen.getByTestId(TabsEnum.unComplete)).toHaveClass('active');
  });
});
