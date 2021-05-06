// import React, { useState } from 'react'
import weather from '../weather.json'
import { WiDegrees } from 'react-icons/wi'
import { GoChevronDown } from 'react-icons/go'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Dropdown from 'react-bootstrap/Dropdown'

const CurrentDay = () => {

    return (
        <>
            <Jumbotron>
                <div className="details">
                    <div className="date">
                        <div className="day">May 5th</div>
                        <div className="weekDay">WED</div>
                        <div className="year">2021</div>
                    </div>
                    <div className="weather">
                        <div className="temp">{Math.round(weather.current.temp)}<WiDegrees className="deg" /></div>
                        <div className="weather">{weather.current.weather[0].main} <img className="icon" src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon"/> </div>
                        <div className="humidity">Humidity: {weather.current.humidity}%</div>
                    </div>
                </div>
                <div className="content">
                    <p>This is filler content. Deserunt magna pariatur non nulla culpa qui irure elit aliqua mollit voluptate nulla officia fugiat. Non esse irure ad aute cupidatat officia ad sint quis aliqua pariatur quis dolore. Sunt velit veniam consectetur labore consequat laboris.</p>
                </div>
            </Jumbotron>
            
            <Dropdown className="dopdownContainer">
                <Dropdown.Toggle variant="secondary" className="dropdownToggle"></Dropdown.Toggle>
                <Dropdown.Menu className="drowdownMenu">
                    <Dropdown.Item>Testing</Dropdown.Item>
                    <Dropdown.Item>Fuck</Dropdown.Item>
                    <Dropdown.Item>You</Dropdown.Item>
                    <Dropdown.Item>jimmy</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
        // <div className="currentDayContainer">
        //     <div className="currentDay">
        //         <h2>Weather</h2>
        //     </div>
        //     <div className="nextDay">
        //         <HiChevronDown color="white"/>
        //     </div>
        // </div>
    )
}

export default CurrentDay
