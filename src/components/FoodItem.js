import React from "react";

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
          <li className="list-group-item">
            <form className="food-quantity">
              <label for="exampleInputPassword1" class="form-label">
                Quanity:
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleInputPassword1"
              />
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>
    </div>
  );
}
