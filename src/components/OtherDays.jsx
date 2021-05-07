import { Container } from 'react-bootstrap'
import Weather from '../weather.json'
import { WiDegrees } from 'react-icons/wi'
import React, { useState } from 'react'

const OtherDays = ({ day }) => {
    const [test, setTest] = useState('')
    console.log(day)
    // console.log(Date(1619982000))
    // console.log(new Date(1619982000))

    const date = () => {
        let nowDate = Date(Number(day.dt))
        console.log(nowDate)
    }

    let days = ['SUN', 'MON', 'TUE', 'WED', 'THURS', 'FRI', 'SAT'];
    
    return (
        <Container className="nextDays" onClick={() => {setTest(test + 1); date()}}>
            <div className="top">
                <div className="Time">{day.dt}</div>
                <div className="icon"><img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon"/></div>
            </div>
            <div className="bottom">
                <div className="TempMax"><p>{Math.round(day.temp.max)}<WiDegrees className="deg" /></p></div>
                <div className="TempMin"><p>{Math.round(day.temp.min)}<WiDegrees className="deg" /></p></div>
            </div>
        </Container>
    )
}

export default OtherDays
