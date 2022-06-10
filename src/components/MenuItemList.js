import React from "react";
import MenuItem from "./MenuItem";

export default function MenuItemList({ menuItems }) {
  const menuItemsArray = menuItems.map((item) => {
    return (
      <MenuItem
        key={item.id}
        name={item.name}
        price={item.price}
        description={item.description}
        image_url={item.image_url}
      />
    );
  });

  return (
    <div className="container">
      <div className="row">{menuItemsArray}</div>
    </div>
  );
}
