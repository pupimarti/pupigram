import React, { useState } from "react";
import NavBar from "./components/NavBar";
import List from "./components/List";
import OptionsPost from "./components/OptionsPost";
import "./App.css";

function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  const handleChangeMode = () => {
    if (mode === "light") {
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  };

  const [optionsPost, setoptionsPost] = useState(false);
  const handleOpenOptionsPost = () => {
    setoptionsPost(true);
  };
  const handleOpenOptionsPostF = () => {
    setoptionsPost(false);
  };

  return (
    <div className={optionsPost ? mode + " openModal" : mode}>
      <NavBar setMode={handleChangeMode} />
      
      <div className="content-app">
      <div className="app">
        {optionsPost === true && (
          <OptionsPost closeOptions={handleOpenOptionsPostF} />
        )}
        <List openOptions={handleOpenOptionsPost} />
          <p className="footer">© 2020 PUPIGRAM DESARROLLADO POR JUAN A. MARTÍ</p>
        </div>
      </div>
    </div>
  );
}

export default App;
