import React from "react";
import { render } from "@testing-library/react";
import MenuButton from "../MenuButton";

describe("Tests for MenuButton", () => {
  it("Renders without crashing", () => {
    render(<MenuButton />);
  });
});
