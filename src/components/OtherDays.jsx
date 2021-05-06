import { Container } from 'react-bootstrap'
import Weather from '../weather.json'
import { WiDegrees } from 'react-icons/wi'

const OtherDays = () => {
    console.log(Weather.daily)

    return (
        <Container className="nextDays">
            <div className="top">
                <div className="Time">2 PM</div>
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
