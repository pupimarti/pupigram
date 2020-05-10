import React, { useState } from "react";
import NavBar from "./components/NavBar";
import List from "./components/List";
import OptionsPost from "./components/OptionsPost";
import "./App.css";

function App() {
  const [mode, setMode] = useState((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) || false);
  const handleChangeMode = () => {
    setMode(!mode);
  };

  const [optionsPost, setoptionsPost] = useState(false);
  const handleOpenOptionsPost = () => {
    setoptionsPost(true);
  };
  const handleOpenOptionsPostF = () => {
    setoptionsPost(false);
  };

  return (
    <div className={mode ? "dark" : ""}>
      <NavBar setMode={handleChangeMode} />
      
      <div className="content-app">
      <div className="app">
        {optionsPost === true && (
          <OptionsPost closeOptions={handleOpenOptionsPostF} />
        )}
        <List openOptions={handleOpenOptionsPost} />
          <p className="footer">© 2020 PUPIGRAM DESARROLLADO POR <a href="www.google.com" >JUAN A. MARTÍ</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
