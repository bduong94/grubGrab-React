import React from "react";
import { render, screen } from "@testing-library/react";
import MenuItem from "../MenuItem";
import MenuButton from "../MenuButton";

//Test Menu Items
const menuItem = {
  name: "Test Item",
  price: 399,
  description: "Test Item Description",
  image_url: "http://www.testitem.com/testitem.png",
};

describe("Tests for a Menu Item", () => {
  it("Menu Item can Render without crashing", () => {
    render(<MenuItem />);
  });

  it("Menu Item will not render if no parameters are passed", () => {
    render(<MenuItem />);

    const buttons = screen.queryAllByRole("button");

    expect(buttons).toHaveLength(0);
  });

  it("Menu Item will render if parameters are correct", () => {
    render(
      <MenuItem
        name={menuItem.name}
        price={menuItem.price}
        description={menuItem.description}
        image_url={menuItem.image_url}
      />
    );

    const buttons = screen.queryAllByRole("button");

    expect(buttons).toHaveLength(3);
  });
});
