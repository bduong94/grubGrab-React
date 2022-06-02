import React from "react";

export default function FoodButton(props) {
  const buttonClass = `btn btn-${props.buttonType}`;
  const buttonText = props.buttonType === "secondary" ? "-" : "+";

  return (
    <div>
      <button type="button" className={buttonClass} onClick={props.onClick}>
        {buttonText}
      </button>
    </div>
  );
}
