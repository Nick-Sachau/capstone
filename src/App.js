import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import CurrentDay from './components/CurrentDay';
import Navbar from './components/Navbar';
import OtherDays from './components/OtherDays';
import { Container } from 'react-bootstrap'
import Weather from './weather.json'

let data = Weather
// for(const day in data.daily){
//   data.daily[day].dt = Date(data.daily[day].dt)
// }

let key = 0;

function App() {

  return (
    <>
      <Navbar />
      <CurrentDay  />
      <Container className="nextDaysRow">
        {
          data.daily.map((day) => (
            key++,
            <OtherDays day={day} key={key}/>
          ))
        }
      </Container>
    </>
  );
}

export default App;
