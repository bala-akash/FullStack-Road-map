import { useState } from "react";

export default function SeperatButton() {
  const [state, setState] = useState(0);
  function handleChanger() {
    setState(state + 1);
  }
  return (
    <button onClick={handleChanger}> {state} times the button clicked</button>
  );
}
