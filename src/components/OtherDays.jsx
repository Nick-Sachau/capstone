import { Container } from 'react-bootstrap'
import Weather from '../weather.json'
import { WiDegrees } from 'react-icons/wi'
import React, { useState } from 'react'

const OtherDays = ({ day }) => {
    const [test, setTest] = useState('')
    let dt = new Date(day.dt)
    console.log(dt)
    let date = dt.getDay()
    console.log(date)

    return (
        <Container className="nextDays" onClick={() => {setTest(test + 1)}}>
            <div className="top">
                <div className="Time">{day.temp.morn}</div>
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
