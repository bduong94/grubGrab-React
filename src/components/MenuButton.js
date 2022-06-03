import React from "react";

export default function MenuButton({ buttonType, onClick }) {
  const buttonClass =
    buttonType === "add"
      ? "btn btn-dark"
      : buttonType === "subtract"
      ? "btn btn-secondary"
      : null;
  `btn btn-${buttonType}`;
  const buttonText =
    buttonType === "add" ? "+" : buttonType === "subtract" ? "-" : null;

  return (
    <div>
      <button type="button" className={buttonClass} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}
