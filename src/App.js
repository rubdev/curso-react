import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Article from './components/Article';
import Pruebas from './components/Pruebas';
import Peliculas from './components/Peliculas';

function App() {

  var btText = "Ver más";

  return (
    <div className="App">
      <Header/>
      <Slider
          titleText="Bienvenido al Curso de React con Víctor Robles de victorroblesweb.es"
          btn={btText}
      />
      <div className="center">
        {/* <Article/> */}
        {/* <Pruebas/> */}
        <Peliculas/>
        <Sidebar/>
        <div className="clearfix" />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
