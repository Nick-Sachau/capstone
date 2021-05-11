import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';
import weather from '../weather.json'
import { WiDegrees } from 'react-icons/wi'
import Jumbotron from 'react-bootstrap/Jumbotron'
// import Dropdown from 'react-bootstrap/Dropdown'
import { AiFillCaretDown } from 'react-icons/ai'
import { AiFillCaretUp } from 'react-icons/ai'
import { Button } from 'react-bootstrap'


const CurrentDay = ({ information }) => {

    console.log(information)

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
                        <div className="temp">{Math.round(information.temp.day)}<WiDegrees className="deg" /></div>
                        <div className="weather"><img className="icon" src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon"/> </div>
                        <div className="humidity">Humidity: {information.humidity}%</div>
                    </div>
                </div>
                <div className="content">
                    <p>This is filler content. Deserunt magna pariatur non nulla culpa qui irure elit aliqua mollit voluptate nulla officia fugiat. Non esse irure ad aute cupidatat officia ad sint quis aliqua pariatur quis dolore. Sunt velit veniam consectetur labore consequat laboris.</p>
                </div>
                
            </Jumbotron>
            <Collapse in={open}>
                    <div id="collapse-text">
                        This is filler text, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad placeat nostrum reiciendis optio aliquam culpa sequi maiores veritatis aperiam reprehenderit impedit dolores corrupti distinctio, error molestias amet provident enim labore?
                        <br></br>
                        <br></br>
                        
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


//im gay