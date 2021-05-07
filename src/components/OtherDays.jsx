import { Container } from 'react-bootstrap'
import Weather from '../weather.json'
import { WiDegrees } from 'react-icons/wi'
import React, { useState } from 'react'

const OtherDays = ({ day }) => {
    const [test, setTest] = useState('')
    let dt = day.dt
    // console.log(dt)

    function resolveAfter2Seconds() {
        return (
            dt = new Date(dt)
        )
    }
      
    async function asyncCall() {
        await resolveAfter2Seconds();
    }
    
    asyncCall();

    // dt = dt.getHours()

    let days = ['SUN', 'MON', 'TUE', 'WED', 'THURS', 'FRI', 'SAT'];
    
    return (
        <Container className="nextDays" onClick={() => {setTest(test + 1)}}>
            <div className="top">
                <div className="Time">{dt.getHours()} AM</div>
                <div className="icon"><img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon"/></div>
            </div>
            <div className="bottom">
                <div className="TempMax"><p>{Math.round(Weather.daily[0].temp.max)}<WiDegrees className="deg" /></p></div>
                <div className="TempMin"><p>{Math.round(Weather.daily[0].temp.min)}<WiDegrees className="deg" /></p></div>
            </div>
        </Container>
    )
}

export default OtherDays
