import { React, useState } from "react";
import FoodButton from "./FoodButton";

export default function FoodItem(props) {
  const [quantity, setQuantity] = useState(0);
  const price_in_dollars = `$${props.price_in_cents / 100}`;

  //Helper Function
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="col-4">
      <div className="card">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: {price_in_dollars}</li>
          <form>
            <li className="list-group-item food-quantity">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Quanity:
              </label>
              <div className="item-quantity">
                <FoodButton buttonType="secondary" onClick={decreaseQuantity} />
                <input
                  type="text"
                  inputMode="numeric"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={quantity}
                />
                <FoodButton buttonType="dark" onClick={increaseQuantity} />
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
  );
}
