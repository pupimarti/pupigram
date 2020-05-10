import React, { useState } from "react";
import NavBar from "./components/NavBar";
import List from "./components/List";
import User from './components/User';
/* import OptionsPost from "./components/OptionsPost"; */
import { HashRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [mode, setMode] = useState((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) || false);
  const handleChangeMode = () => {
    setMode(!mode);
  };
/* 
  const [optionsPost, setoptionsPost] = useState(false);
  const handleOpenOptionsPost = () => {
    setoptionsPost(true);
  };
  const handleOpenOptionsPostF = () => {
    setoptionsPost(false);
  }; */

  return (
    <div className={mode ? "dark" : ""}>
      <HashRouter basename='/'>
        <NavBar setMode={handleChangeMode} />
        <div className="content-app">
          <div className="app">
            <Route exact path="/user" component={User} />
            <Route exact path="/" component={List} />
            
            <p className="footer">© 2020 PUPIGRAM DESARROLLADO POR <a href="www.google.com" >JUAN A. MARTÍ</a></p>
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
