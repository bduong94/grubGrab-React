import React from "react";
import CartItemList from "./CartItemList";
import FoodItemList from "./FoodItemList";
import Navbar from "./Navbar";

const testData = [
  {
    id: 1,
    name: "Nachos",
    price_in_cents: 399,
    type: "side",
    description: "Nachos with Cheese",
    image:
      "https://www.seriouseats.com/thmb/tntNdOAMuxyGZHrYR3YZeO0k7Lo=/1500x1125/filters:fill(auto,1)/cheese-sauce-for-cheese-fries-and-nachos-hero-01-e6ccf966688c43ec8025cf9a19678423.jpg",
  },
  {
    id: 2,
    name: "Hot Dog",
    price_in_cents: 699,
    type: "meat",
    description: "Hot Dog with a Bun",
    image:
      "https://www.thespruceeats.com/thmb/dQw3N0LrUbNNrjqAwwIaa2u_7l0=/3000x1687/smart/filters:no_upscale()/homemade-hot-dogs-1808491-final-01-ddf78878cb784ccdb617a2ae31674b75.jpg",
  },
  {
    id: 3,
    name: "Burger",
    price_in_cents: 699,
    type: "meat",
    description: "Patty in between two buns",
    image:
      "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Smash-Burgers_EXPS_TOHcom20_246232_B10_06_10b.jpg",
  },
  {
    id: 4,
    name: "Tacos",
    price_in_cents: 599,
    type: "meat",
    description: "Not Taco Bell",
    image:
      "https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg",
  },
];

export default function Application(props) {
  return (
    <>
      <Navbar />
      <CartItemList />
      <FoodItemList FoodItems={testData} />
    </>
  );
}
