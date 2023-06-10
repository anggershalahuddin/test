// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const ButtonSaya = () => {
  const [name, setName] = useState("");

  const sayHello = () => {
    setName("Angger");
  };

  const hapus = () => {
    setName("");
  };

  return (
    <div>
      <label>Hello {name}</label>
      <br />
      <button onClick={sayHello} type="button">
        Ini Button
      </button>
      <button onClick={hapus} type="button">
        Hapus
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div
      style={{
        margin: 20,
        color: "red",
        fontSize: 32,
      }}
    >
      <h1>Hello ReactJS </h1>
      <ButtonSaya />
    </div>
  );
};

export default App;
