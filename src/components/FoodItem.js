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
          <li className="list-group-item">{price_in_dollars}</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body"></div>
      </div>
    </div>
  );
}
