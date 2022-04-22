import React from "react";
import FoodButton from "./FoodButton";

export default function FoodItem(props) {
  const price_in_dollars = `$${props.price_in_cents / 100}`;
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
              <label for="exampleInputPassword1" class="form-label">
                Quanity:
              </label>
              <div>
                <FoodButton />
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputPassword1"
                />

                <FoodButton />
              </div>
            </li>
            <li className="list-group-item">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </li>
          </form>
        </ul>
      </div>
    </div>
  );
}
