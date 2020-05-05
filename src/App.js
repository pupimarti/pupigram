import React, {useState} from 'react';
import NavBar from './components/NavBar';
import Post from './components/Post';
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
  return (
    <div className={mode}>
        <NavBar setMode={handleChangeMode}/>
      <div className="relleno">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default App;
