import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState} from 'react'
import CurrentDay from './components/CurrentDay';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <CurrentDay />
    </>
  );
}

export default App;
