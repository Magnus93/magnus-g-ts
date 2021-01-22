import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="header">
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="/projects">Projects</a></li>
            <li><a href="/cv">CV</a></li>
            <li><a href="/about">About Me</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
