import React from "react";

export default function FoodButton(props) {
  const buttonClass = `btn btn-${props.buttonType}`;

  return (
    <div>
      <button type="button" className={buttonClass}>
        Light
      </button>
    </div>
  );
}
