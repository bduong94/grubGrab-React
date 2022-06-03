import React from "react";
import { render, screen } from "@testing-library/react";
import MenuButton from "../MenuButton";

describe("Tests for MenuButton", () => {
  it("Renders without crashing", () => {
    render(<MenuButton />);
  });

  xit("Does not render a button if button type is not add or minus", () => {
    render(<MenuButton />);
    const addButton = screen.queryByText("+");
    const subtractButton = screen.queryByText("-");

    expect(addButton).toBeNull();
    expect(subtractButton).toBeNull();
  });

  it("Renders a '+' Button", () => {
    const { getByText } = render(<MenuButton buttonType="add" />);
    expect(getByText("+")).toBeInTheDocument();
  });

  it("Renders a '-' Button", () => {
    const { getByText } = render(<MenuButton buttonType="subtract" />);
    expect(getByText("-")).toBeInTheDocument();
  });
});
