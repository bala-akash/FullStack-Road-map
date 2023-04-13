import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MyButton from "./Button";
import SeperatButton from "./seperateButton";

function App() {
  const [count, setCount] = useState(0);
  function handleChange() {
    setCount(count + 1);
  }
  return (
    <div>
      <div>
        <h1>Welcome To React App</h1>
      </div>
      <div>
        <h1>Count the update seperately</h1>
        <SeperatButton />
        <br></br>
        <br></br>
        <SeperatButton />
      </div>
      <h1>Count the update Together</h1>
      <MyButton title="box1" count={count} onClick={handleChange} />
      <br></br>
      <br></br>
      <MyButton title="box2" count={count} onClick={handleChange} />
    </div>
  );
}

export default App;
