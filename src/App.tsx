import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from "./components/AboutPage";
import darkmodeIcon from "./public/img/darkmode-icon.svg";
import lightmodeIcon from "./public/img/lightmode-icon.svg";

class App extends React.Component<{}, {theme: string}> {
  constructor(props : any) {
    super(props);
    let theme : any = localStorage.getItem('theme');
    this.state = {
      theme: theme ? theme : 'light'
    };
    localStorage.setItem('theme', this.state.theme);
  }

  toogleTheme() {
    let theme : string = 'light';
    if (this.state.theme === 'light') {
      theme = 'dark';
    }
    this.setState({'theme': theme});
    localStorage.setItem('theme', theme);
  }

  render() {
    return (
      <div className={`App ${this.state.theme}Theme`}>
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
          <button className="theme-toogle" onClick={this.toogleTheme.bind(this)}><img src={this.state.theme === "light" ? darkmodeIcon : lightmodeIcon}/></button>
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
