import React, { useState } from "react";
import NavBar from "./components/NavBar";
import List from "./components/List";
import User from './components/User';
import PostId from './components/PostId';
/* import OptionsPost from "./components/OptionsPost"; */
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import JavascriptTimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'
import NoPage from './components/NoPage';

JavascriptTimeAgo.locale(es)
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
    <div className={mode ? "dark" : "light"}>
      <HashRouter basename='/'>
        <NavBar setMode={handleChangeMode} />
        <div className="content-app">
          <div className="app">
            <Switch>
              <Route exact path="/search">
                <NoPage construction/>
              </Route>
              <Route exact path="/explore">
                <NoPage construction/>
              </Route>
              <Route exact path="/direct">
                <NoPage construction/>
              </Route>
              <Route exact path="/posts/:id" component={PostId} />
              <Route exact path="/:user" component={User} />
              <Route exact path="/" component={List} />
            </Switch>
            <p className="footer">© 2020 PUPIGRAM DESARROLLADO POR <a href="www.google.com" >JUAN A. MARTÍ</a></p>
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
