import React from 'react';

import Header from './header/header.js';
import Main from './main/main.js';

import './App.css';
import './header/header.css';
import './main/container_1/container_1.css';
import './main/container_2/container_2.css';
import './main/container_3/container_3.css';

function App() {
  return (
    <div className="container">
      <Header/>
      <Main/>
    </div>
  )
}

export default App;