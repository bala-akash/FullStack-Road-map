import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MyButton from "./Button";

function App() {
  return (
    <div>
      <h1>Welcome To React App</h1>
      <h1>Count the update seperately</h1>
      <MyButton title="box1" />
      <br></br>
      <br></br>
      <MyButton title="box2" />
    </div>
  );
}

export default App;
