import { useState } from "react";

export default function MyButton(props) {
  const firstName = "akash";
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button onClick={handleClick}>
      Clicked {count} times Mr.{firstName} {props.title}
    </button>
  );
}
