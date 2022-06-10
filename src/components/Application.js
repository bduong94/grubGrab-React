import React, { useEffect, useState } from "react";
import CartItemList from "./CartItemList";
import MenuItemList from "./MenuItemList";
import Navbar from "./Navbar";
import axios from "axios";
import SignUp from "./SignUp";
import { useCookies } from "react-cookie";

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
  //Setters
  const [menuItems, setMenuItems] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [cookies, setCookie, removeCookie] = useCookies();

  //Helper Functions
  const getMenuItems = async () => {
    const menuItems = await axios.get("http://localhost:8080/api/menu_items");
    return menuItems;
  };

  const getUserInformation = async (id) => {
    const information = await axios.get(
      `http://localhost:8080/api/user/${id}`,
      { id }
    );

    return information;
  };

  const logOut = () => {
    removeCookie("ID");
    setCurrentUser(null);
  };

  useEffect(() => {
    const userID = Number(cookies.ID);

    if (userID) {
      setCurrentUser(userID);
    }

    const menuItems = async () => await getMenuItems();
    const userInformation = async (id) => await getUserInformation(id);

    menuItems().then((response) => {
      setMenuItems(response.data);
    });

    if (userID) {
      userInformation(userID).then((response) => console.log(response));
    }
  }, []);
  return (
    <>
      <Navbar currentUser={currentUser} logOut={logOut} />
      <SignUp setCookie={setCookie} />
      <CartItemList />
      <MenuItemList menuItems={menuItems} />
    </>
  );
}
