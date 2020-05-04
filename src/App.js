import React, {useState} from 'react';
import SwitchMode from './components/SwitchMode';
import './App.css';

function App() {
  const [mode, setMode] = useState('light')
  const handleChangeMode = () => {
    if(mode === 'light')
      setMode('dark');
    else
      setMode('light');
  }
  return (
    <div className={mode}>
      <h1>Programacionok</h1>
      <SwitchMode setMode={handleChangeMode} />
    </div>
  );
}

export default App;
