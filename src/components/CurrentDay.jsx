// import React, { useState } from 'react'
import weather from '../weather.json'
import { WiDegrees } from 'react-icons/wi'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Dropdown from 'react-bootstrap/Dropdown'

const CurrentDay = ({ day, month, year, date }) => {

    return (
        <>
            <Jumbotron>
                <div className="details">
                    <div className="date">
                        <div className="day">{month + " " + date}</div>
                        <div className="weekDay">{day}</div>
                        <div className="year">{year}</div>
                    </div>
                    <div className="weather">
                        <div className="temp">{Math.round(weather.current.temp)}<WiDegrees className="deg" /></div>
                        <div className="weather">{weather.current.weather[0].description} <img className="icon" src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon"/> </div>
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
                    <Dropdown.Item>Connor</Dropdown.Item>
                    <Dropdown.Item>Jaxson</Dropdown.Item>
                    <Dropdown.Item>Kevin</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default CurrentDay
