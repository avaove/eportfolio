import './App.css';
import React, { Component } from 'react';
import Experience from './components/Experience'
import Intro from './components/Intro'
import NavBar from './components/NavBar'
import Project from './components/Project'
import Contact from './components/Contact'
import PolygonBackground from './layer1.svg';
// import {ReactComponent as PolygonBackground} from './layer1.svg';


function App() {
  return (
    <div className="App">
      <embed class="bg" src={PolygonBackground} />
      <NavBar />
      <Intro />
      <Experience />
      <Project />
      <Contact/>


    </div>
  );
}

export default App;
