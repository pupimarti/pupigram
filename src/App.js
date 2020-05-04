import React, {useState} from 'react';
import SwitchMode from './components/SwitchMode';
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
      <NavBar/>
      <h1>Programacionok</h1>
      <SwitchMode setMode={handleChangeMode} />
    </div>
  );
}

export default App;
