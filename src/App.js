import React, {useState} from 'react';
import NavBar from './components/NavBar';
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
      <div className="content-app">
        <NavBar setMode={handleChangeMode}/>
      </div>
      <div className="relleno"></div>
    </div>
  );
}

export default App;
