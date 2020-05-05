import React, {useState} from 'react';
import NavBar from './components/NavBar';
import Post from './components/Post';
import OptionsPost from './components/OptionsPost';
import './App.css';

function App() {
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light')
  const handleChangeMode = () => {
    if(mode === 'light') {
      setMode('dark');
      localStorage.setItem('mode', 'dark');
    }
    else{
      setMode('light');
      localStorage.setItem('mode', 'light');
    }
  }

  const [optionsPost, setoptionsPost] = useState(false);
  const handleOpenOptionsPost = () => {
    setoptionsPost(true);
  }
  const handleOpenOptionsPostF = () => {
    setoptionsPost(false);
  }

  return (
    <div className={optionsPost ? mode + " openModal" : mode}>
        <NavBar setMode={handleChangeMode}/>
      <div className="relleno">
        {optionsPost === true && 
          <OptionsPost closeOptions={handleOpenOptionsPostF} />
        }
        <Post openOptions={handleOpenOptionsPost}/>
        <Post openOptions={handleOpenOptionsPost}/>
        <Post openOptions={handleOpenOptionsPost}/>
        <Post openOptions={handleOpenOptionsPost}/>
        <Post openOptions={handleOpenOptionsPost}/>
        <Post openOptions={handleOpenOptionsPost}/>
      </div>
    </div>
  );
}

export default App;
