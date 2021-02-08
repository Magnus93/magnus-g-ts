import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from "./components/AboutPage";

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
            <li><a href="/about">About Me</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
        </nav>
      </div>
      <div className="content-parent">
        <BrowserRouter>
            <Switch>
              <Route path="/projects">
                <ProjectsPage/>
              </Route>
              <Route path="/about">
                <AboutPage/>
              </Route>
              <Route path="/">
                <AboutPage/>
              </Route>
            </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
