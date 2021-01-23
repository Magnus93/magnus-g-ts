import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProjectsPage from './components/projects';

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
      <div className="content-parent">
        <BrowserRouter>
        <div className="content">
            <Switch>
              <Route path="/projects">
                <ProjectsPage/>
              </Route>
              <Route path="/cv">
                CV
              </Route>
              <Route path="/about">
                About
              </Route>
              <Route path="/">
                <ProjectsPage/>
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
