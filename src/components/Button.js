import React from "react";

export default function Button({ message, onClick }) {
  return <button onClick={onClick}>{message}</button>;
}
