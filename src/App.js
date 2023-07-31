import './App.css';
import 'aos/dist/aos.css';

import {Contact, Experience, Intro, NavBar, Painting, Project} from './components';

import PolygonBackground from './layer1.svg';
import React from 'react';

function App() {
  return (
    <div className="App">
      <embed className="background-image" src={PolygonBackground} />
      <NavBar />
      <Intro />
      <Experience />
      <Project />
      <Painting />
      <Contact/>
    </div>
  );
}

export default App;
