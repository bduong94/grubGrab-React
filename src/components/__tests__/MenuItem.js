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
  it("MenuItem can Render without crashing", () => {
    render(<MenuItem />);
  });
});
