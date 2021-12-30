import React from 'react';
import SongSearch from "./components/SongSearch"
import "./App.css"
import music from "./components/images/music.png"
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <>
     <header className="App-header">
       <img className="App-logo" src={music}/>
       <h1 className="Titulo">Buscador de Canciones</h1> 
     </header>
     <article className="App-article">
      <SongSearch/>
      <Footer/>
    </article>
    </>
  );
}
