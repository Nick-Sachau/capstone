import { Container } from 'react-bootstrap'
import { WiDegrees } from 'react-icons/wi'
import React from 'react'


const OtherDays = ({ day, currDay, onClick:getherInformation }) => {
    
    return (
        <Container className="nextDays" onClick={() => {getherInformation(currDay)}}>
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