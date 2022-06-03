import React from "react";
import { render, screen } from "@testing-library/react";
import MenuButton from "../MenuButton";

describe("Tests for MenuButton", () => {
  it("Renders without crashing", () => {
    render(<MenuButton />);
  });

  it("Renders a '+' Button", () => {
    render(<MenuButton buttonType="add" />);
    expect(screen.getByText("+")).toBeInTheDocument();
  });

  it("Renders a '-' Button", () => {
    render(<MenuButton buttonType="subtract" />);
    expect(screen.getByText("-")).toBeInTheDocument();
  });

  it("Does not render a button if button type is not add or minus", () => {
    render(<MenuButton />);

    const firstButton = screen.queryByRole("button");

    expect(firstButton).toBeNull();

    render(<MenuButton buttonType="add" />);

    const secondButton = screen.queryByRole("button");

    expect(secondButton).not.toBeNull();
  });
});
