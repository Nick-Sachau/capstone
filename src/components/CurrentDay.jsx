import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';
import weather from '../weather.json'
import { WiDegrees } from 'react-icons/wi'
import Jumbotron from 'react-bootstrap/Jumbotron'
// import Dropdown from 'react-bootstrap/Dropdown'
import { AiFillCaretDown } from 'react-icons/ai'
import { Button } from 'react-bootstrap'

const CurrentDay = () => {
    const now = new Date();
    const date = now.getDate();
    let month = now.getMonth();
    let months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let day = now.getDay();
    let days = ['SUN', 'MON', 'TUE', 'WED', 'THURS', 'FRI', 'SAT'];
    const year = now.getFullYear();

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
    
    const [open, setOpen] = useState(false)
    

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
                        <div className="weather">{weather.current.weather[0].main} <img className="icon" src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon"/> </div>
                        <div className="humidity">Humidity: {weather.current.humidity}%</div>
                    </div>
                </div>
                <div className="content">
                    <p>This is filler content. Deserunt magna pariatur non nulla culpa qui irure elit aliqua mollit voluptate nulla officia fugiat. Non esse irure ad aute cupidatat officia ad sint quis aliqua pariatur quis dolore. Sunt velit veniam consectetur labore consequat laboris.</p>
                </div>
                
            </Jumbotron>
            <Collapse in={open}>
                    <div id="collapse-text">
                        This is filler text, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad placeat nostrum reiciendis optio aliquam culpa sequi maiores veritatis aperiam reprehenderit impedit dolores corrupti distinctio, error molestias amet provident enim labore?
                    </div>
                </Collapse>
            
            <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse=text"
            aria-expanded={open}
            ><AiFillCaretDown /></Button>
        </>
    )
}

export default CurrentDay
