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

function App() {
  const now = new Date();
  const date = now.getDate();
  let month = now.getMonth();
  let months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let day = now.getDay();
  let days = ['SUN', 'MON', 'TUE', 'WED', 'THURS', 'FRI', 'SAT'];
  const year = now.getFullYear();
  const nDate = day

  for(const i in days) {
      if(day == i) {
          day = days[i]
      }
  }

  const gatherInfo = (currDay) => {
    // console.log(currDay)
    for(const i in data.daily){
      if(data.daily[i].dt == currDay){
        console.log(data.daily[i])
      }
    }
  }

  for(const i in months) {
      if(month == i) {
          month = months[i]
      }
  }

  const [jumbotron, setJumbotron] = useState('')

  const activeDay = () => {
    
  }

  const startDateIndex = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  let dayArray = []

  for(let i = nDate; i < nDate+8; i++) {
    dayArray.push(startDateIndex[i-1])
  }

  return (
    <>
      <Navbar />
      <CurrentDay date={date} day={day} month={month} year={year}/>
      <Container className="nextDaysRow"> 
        {
          data.daily.map((day, index) => (
            <OtherDays currDay={dayArray[index]} day={day} key={index} id={index} onClick={gatherInfo}/>
          ))
        }
      </Container>
    </>
  );
}

export default App;
