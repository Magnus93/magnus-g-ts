import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from "./components/AboutPage";

class App extends React.Component<{}, {theme: string}> {
  constructor(props : any) {
    super(props);
    let theme : any = localStorage.getItem('theme');
    this.state = {
      theme: theme ? theme : 'light'
    };
  }

  toogleTheme() {
    let theme : string = 'light';
    if (this.state.theme === 'light') {
      theme = 'dark';
    }
    this.setState({'theme': theme});
  }

  render() {
    return (
      <div className={`App ${this.state.theme}`}>
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
          <button onClick={this.toogleTheme.bind(this)}>Change Theme</button>
        </div>
        <div>
          <BrowserRouter>
              <Switch>
                <Route path="/projects">
                  <ProjectsPage/>
                </Route>
                <Route path="/about">
                  <AboutPage/>
                </Route>
                <Route path="/">
                  <ProjectsPage/>
                </Route>
              </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
