import React from "react";

export default function MenuButton({ buttonType, onClick }) {
  const buttonClass =
    buttonType === "add"
      ? "btn btn-dark"
      : buttonType === "subtract"
      ? "btn btn-secondary"
      : null;

  const buttonText =
    buttonType === "add" ? "+" : buttonType === "subtract" ? "-" : null;

  return (
    <div>
      {buttonClass ? (
        <button type="button" className={buttonClass} onClick={onClick}>
          {buttonText}
        </button>
      ) : null}
    </div>
  );
}
