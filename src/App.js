import {Experience, Intro, Painting, Project} from './components';

import React from 'react';

function App() {
  return (
    <div className="App container">
      <Intro />
      <Experience />
      <Project />
      <Painting />
    </div>
  );
}

export default App;
