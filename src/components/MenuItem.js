import { React, useState } from "react";
import MenuButton from "./MenuButton";

export default function MenuItem({ name, price, description, image_url }) {
  const [quantity, setQuantity] = useState(0);
  const price_in_dollars = price ? `$${price / 100}` : null;
  const labelName = name.toLowerCase().replace(" ", "-");

  //Helper Function
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return price ? (
    <div className="col-4">
      <div className="card">
        <img src={image_url} className="card-img-top menu-image" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: {price_in_dollars}</li>
          <form>
            <li className="list-group-item menu-quantity">
              <label htmlFor={labelName} className="form-label">
                Quanity:
              </label>
              <div className="item-quantity">
                <MenuButton buttonType="subtract" onClick={decreaseQuantity} />
                <input
                  type="text"
                  inputMode="numeric"
                  className="form-control"
                  id={labelName}
                  value={quantity}
                />
                <MenuButton buttonType="add" onClick={increaseQuantity} />
              </div>
            </li>
            <li className="list-group-item">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </li>
          </form>
        </ul>
      </div>
    </div>
  ) : null;
}
