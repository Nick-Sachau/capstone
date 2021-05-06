import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState} from 'react'
import CurrentDay from './components/CurrentDay';
import Navbar from './components/Navbar';
import OtherDays from './components/OtherDays';
import { Container } from 'react-bootstrap'

function App() {

  return (
    <>
      <Navbar />
      <CurrentDay />
      <Container className="nextDaysRow">
        <OtherDays />
        <OtherDays />
        <OtherDays />
        <OtherDays />
        <OtherDays />
        <OtherDays />
        <OtherDays />
        <OtherDays />
      </Container>
    </>
  );
}

export default App;
