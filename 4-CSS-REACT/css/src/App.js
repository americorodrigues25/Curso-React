import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const n = 14;

  const [name] = useState("Americo");
  const redTitle = true;

  return (
    <div className="App">
      {/*css global*/}
      <h1>React CSS</h1>
      <p>Paragrafo do componente app.js</p>
      {/*css do componente*/}
      <MyComponent />
      {/*css inline*/}
      <p style={{ color: "green", fontSize: "30px" }}>
        Paragrafo do componente app.js com css inline
      </p>
      {/*css dinamico*/}
      <h2 style={n < 10 ? { color: "purple" } : { color: "blue" }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "blue" }}>
        CSS dinâmico
      </h2>
      <p
        style={
          name === "Americo"
            ? { color: "red", backgroundColor: "yellow", padding: "10px" }
            : null
        }
      >
        CSS dinâmico
      </p>
      {/*classe dinâmica*/}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este titulo vai ter classe dinâmica
      </h2>
      {/*css modules*/}
      <Title />
    </div>
  );
}

export default App;
