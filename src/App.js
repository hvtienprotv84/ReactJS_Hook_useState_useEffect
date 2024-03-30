import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://hvtienprotv84.github.io/MyWebsite/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Huỳnh Vĩnh Tiến - Hook - useState - useEffect
        </a>
        <Example />
      </header>
    </div>
  );
}
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Bạn Đã Nhấp ${count} Lần`;
  });
  return (
    <div>
      <p className="clicked">Bạn Đã Nhấp {count} Lần :)))</p>
      <button className="clickme" onClick={() => setCount(count + 1)}>Click Me</button>
      <button className="clickme" onClick={() => setCount(0)}>Reset Me</button>
    </div>
  );
}
export default App;
