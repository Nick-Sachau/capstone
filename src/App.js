import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState} from 'react'
import CurrentDay from './components/CurrentDay';
import Navbar from './components/Navbar';
import OtherDays from './components/OtherDays';
import { Container } from 'react-bootstrap'
import Weather from './weather.json'

function App() {
  let time = new Date(Weather.daily[0].dt)
  console.log(time.getDay())

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
