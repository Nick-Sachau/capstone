import { Container } from 'react-bootstrap'
import Weather from '../weather.json'
import { WiDegrees } from 'react-icons/wi'
import React, { useState } from 'react'


const OtherDays = ({ day, id, currDay, onClick}) => {
    

    const [test, setTest] = useState('')

    const date = () => {
        let nowDate = Date(Number(day.dt))
    }

    let days = ['SUN', 'MON', 'TUE', 'WED', 'THURS', 'FRI', 'SAT'];

    

    // useState(this.dt)
    
    return (
<<<<<<< HEAD
        <Container className="nextDays" onClick={() => {console.log()}}>
=======
        <Container className="nextDays" onClick={() => {onClick(currDay)}}>
>>>>>>> main
            <div className="top">
                <div className="Time">{currDay}</div>
                <div className="icon"><img src={"http://openweathermap.org/img/wn/" + day.weather[0].icon + "@2x.png"} alt="weather icon"/></div>
            </div>
            <div className="bottom">
                <div className="TempMax"><p>{Math.round(day.temp.max)}<WiDegrees className="deg" /></p></div>
                <div className="TempMin"><p>{Math.round(day.temp.min)}<WiDegrees className="deg" /></p></div>
            </div>
        </Container>
    )
}



export default OtherDays
