import React from "react";
import CartItemList from "./CartItemList";
import FoodItemList from "./FoodItemList";

export default function Application(props) {
  return (
    <>
      <h1>Hello</h1>
      <CartItemList />
      <FoodItemList />
    </>
  );
}
