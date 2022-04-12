import React from 'react'
import Container1 from './container_1/container_1.js';
import Container2 from './container_2/container_2.js';
import Container3 from './container_3/container_3.js';

function Main () {
  return (
    <div className="Main">
      <Container1/>
      <Container2/>
      <Container3/>
    </div>
  )
}

export default Main;