import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
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
    const testItem = screen.queryByText("Test Item");

    expect(buttons).toHaveLength(3);
    expect(testItem).not.toBeNull();
  });

  it("Quanity is +1 when clicking add button", () => {
    render(
      <MenuItem
        name={menuItem.name}
        price={menuItem.price}
        description={menuItem.description}
        image_url={menuItem.image_url}
      />
    );

    const button = screen.queryByText("+");

    fireEvent.click(button);

    expect(screen.getByDisplayValue("1")).toBeInTheDocument();

    fireEvent.click(button);
  });

  it("Quanity is still 0 when clicking subtract button", () => {
    render(
      <MenuItem
        name={menuItem.name}
        price={menuItem.price}
        description={menuItem.description}
        image_url={menuItem.image_url}
      />
    );

    const button = screen.queryByText("-");

    fireEvent.click(button);

    expect(screen.getByDisplayValue("0")).toBeInTheDocument();
  });

  it("Quantity is 1 when clicking add button twice and subtract button once", () => {
    render(
      <MenuItem
        name={menuItem.name}
        price={menuItem.price}
        description={menuItem.description}
        image_url={menuItem.image_url}
      />
    );

    const addButton = screen.queryByText("+");
    const subtractButton = screen.queryByText("-");

    fireEvent.click(addButton);
    fireEvent.click(addButton);
    fireEvent.click(subtractButton);

    expect(screen.getByDisplayValue("1")).toBeInTheDocument();
  });

  it("Quantity should be 5 when typing 5", () => {
    render(
      <MenuItem
        name={menuItem.name}
        price={menuItem.price}
        description={menuItem.description}
        image_url={menuItem.image_url}
      />
    );

    const input = screen.queryByLabelText("Quantity:");
    input.simulate("change", { target: { value: 5 } });
    expect(screen.getByDisplayValue("5")).toBeInTheDocument();
  });
});
