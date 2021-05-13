import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import CurrentDay from './components/CurrentDay';
import Navbar from './components/Navbar';
import OtherDays from './components/OtherDays';
import { Container } from 'react-bootstrap';
import data from './weather.json';



function App() {
  // api call https://api.openweathermap.org/data/2.5/onecall?lat=33.629250&lon=-112.173780&exclude=alerts&dt=1620789896762&appid=a8504f8f789748ee810037256e9a203a&units=imperial

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

  for(const i in months) {
      if(month == i) {
          month = months[i]
      }
  }

  const startDateIndex = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  let dayArray = []

  for(let i = nDate; i < nDate+8; i++) {
    dayArray.push(startDateIndex[i-1])
  }

  const getherInformation = (dateDay) => {
    for(const i in data.daily) {
      if(data.daily[i].dt == dateDay) {
        setDateObj(data.daily[i])
        break;
      }
    }
  }

  const getStartingDate = (currDate) => {
    for(const i in data.daily) {
      if(data.daily[i].dt == currDate) {
        return(data.daily[i])
      }
    }
  }

  const [dateObj, setDateObj] = useState(getStartingDate(dayArray[0]))

  if(data) {

    return (
      <>
        <Navbar />
        <CurrentDay information={dateObj} date={date} day={day} month={month} year={year}/>
        <Container className="nextDaysRow"> 
          {
            data.daily.map((day, index) => (
              <OtherDays onClick={getherInformation} currDay={dayArray[index]} day={day} key={index}/>
            ))
          }
        </Container>
      </>
    );
  }

  return (
    <>

    </>
  )
}
  

export default App;
