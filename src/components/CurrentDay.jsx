import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';
import { WiDegrees } from 'react-icons/wi'
import Jumbotron from 'react-bootstrap/Jumbotron'
// import Dropdown from 'react-bootstrap/Dropdown'
import { AiFillCaretDown } from 'react-icons/ai'
import { AiFillCaretUp } from 'react-icons/ai'
import { Button } from 'react-bootstrap'
import { ImArrowUpLeft2 } from 'react-icons/im'
import { ImArrowUp2 } from 'react-icons/im'
import { ImArrowUpRight2 } from 'react-icons/im'


const CurrentDay = ({ information }) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <Jumbotron>
                <div className="details">
                    <div className="date">
                        <div className="day">{information.dt}</div>
                        <div className="weekDay">{information.month} {information.day}</div>
                        <div className="year">{information.year}</div>
                    </div>
                    <div className="weather">
                        <div className="temp"><p id="hightemp">{Math.round(information.temp.max)} </p>/<p id="lowtemp">{Math.round(information.temp.min)}</p></div>
                        <div className="weather">{information.weather[0].description}<img className="icon" src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon"/> </div>
                        <div className="humidity">Humidity: {information.humidity}%</div>
                    </div>
                </div>
                <div className="content">
                    <div className="through-day">
                    <ul>
                        <h4><strong>Throughout the Day⠀</strong></h4>
                        <li>Morning: {Math.round(information.temp.morn)}<WiDegrees className="deg" /></li>
                        <li>Noon: {Math.round(information.temp.day)}<WiDegrees className="deg" /></li>
                        <li>Evening: {Math.round(information.temp.eve)}<WiDegrees className="deg" /></li>
                        <li>Night: {Math.round(information.temp.night)}<WiDegrees className="deg" /></li>
                    </ul>
                    </div>
                   
                    <div className="feels-like">
                    <ul>
                        <h4><strong>Feels Like⠀</strong></h4>
                        <li>Morning: {Math.round(information.feels_like.morn)}<WiDegrees className="deg" /></li>
                        <li>Noon: {Math.round(information.feels_like.day)}<WiDegrees className="deg" /></li>
                        <li>Evening: {Math.round(information.feels_like.eve)}<WiDegrees className="deg" /></li>
                        <li>Night: {Math.round(information.feels_like.night)}<WiDegrees className="deg" /></li>
                    </ul>
                    </div>
                </div>

            </Jumbotron>
            <Collapse in={open}>
                <div id="collapse-text">
                    <br></br>
                    <div id="dropdownwrap">
                        <ul>
                            <div className="arrow">
                                <h4>Wind</h4>
                                {information.wind_deg <= 225 ? <ImArrowUpLeft2 id="arrow-icon" /> : information.wind_deg > 225 && information.wind_deg <= 250 ? <ImArrowUp2 id="arrow-icon" /> : information.wind_deg > 250 ? <ImArrowUpRight2 id="arrow-icon"/> : ""}
                            </div>
                            
                            <div className="list">
                                <li>Speed: {information.wind_speed}</li>
                                <li>Gust: {information.wind_gust}</li>
                                <li>Degrees: {information.wind_deg}</li>
                            </div>
                            
                        </ul>
                    
                    </div>
                        
                    

                </div>

            </Collapse>

            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse=text"
                aria-expanded={open}
                className="collapseButton"
            >{!open ? <AiFillCaretDown /> : <AiFillCaretUp />}</Button>
        </>
    )
}

export default CurrentDay