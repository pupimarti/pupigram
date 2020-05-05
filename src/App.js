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
        <NavBar setMode={handleChangeMode}/>
      <div className="relleno">
        <h1>Prueba</h1>
        <h2>Otra prueba</h2>
        <h3>Una mas</h3>
        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.

</p>
      </div>
    </div>
  );
}

export default App;
