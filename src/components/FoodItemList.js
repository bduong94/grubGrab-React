import React from "react";
import FoodItem from "./FoodItem";

export default function FoodItemList(props) {
  const FoodItemsArray = props.FoodItems.map((food) => {
    return (
      <FoodItem
        key={food.id}
        name={food.name}
        price_in_cents={food.price_in_cents}
        description={food.description}
        image={food.image}
      />
    );
  });

  return (
    <div className="container">
      <div className="row">{FoodItemsArray}</div>
    </div>
  );
}
