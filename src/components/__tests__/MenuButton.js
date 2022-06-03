import React from "react";
import { render, screen } from "@testing-library/react";
import MenuButton from "../MenuButton";

describe("Tests for MenuButton", () => {
  it("Renders without crashing", () => {
    render(<MenuButton />);
  });

  it("Renders a button with no text", () => {
    render(<MenuButton />);
    const addButton = screen.queryByText("+");
    const minusButton = screen.queryByText("-");

    expect(addButton).toBeNull();
    expect(minusButton).toBeNull();
  });

  it("Renders a '+' Button", () => {
    const { getByText } = render(<MenuButton buttonType="dark" />);
    expect(getByText("+")).toBeInTheDocument();
  });

  it("Renders a '-' Button", () => {
    const { getByText } = render(<MenuButton buttonType="secondary" />);
    expect(getByText("-")).toBeInTheDocument();
  });
});
