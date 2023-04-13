import { useState } from "react";

export default function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      {count} times the button has been clicked!
    </button>
  );
}
