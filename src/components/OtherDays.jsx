import { Container } from 'react-bootstrap'
import Weather from '../weather.json'

const OtherDays = () => {
    return (
        <Container className="nextDays">
            <div className="icon"><img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon"/></div>
            <div className="Temp"><p>Temp: {Math.round(Weather.current.temp)}</p></div>
        </Container>
    )
}

export default OtherDays
