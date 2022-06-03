import React from "react";

export default function MenuButton({ buttonType, onClick }) {
  const buttonClass = `btn btn-${buttonType}`;
  const buttonText = buttonType === "secondary" ? "-" : "+";

  return (
    <div>
      <button type="button" className={buttonClass} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}
