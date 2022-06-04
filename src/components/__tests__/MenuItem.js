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

  it("Menu Item will not render if parameters are not correct", () => {
    render(<MenuItem />);

    const firstButton = screen.queryAllByRole("button");

    expect(firstButton).toHaveLength(0);

    render(
      <MenuItem
        name={menuItem.name}
        price={menuItem.price}
        description={menuItem.description}
        image_url={menuItem.image_url}
      />
    );

    const secondButton = screen.queryAllByRole("button");

    expect(secondButton).toHaveLength(3);
  });
});
