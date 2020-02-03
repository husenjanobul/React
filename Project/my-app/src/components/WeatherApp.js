import React from 'react'
import RemoveButton from './RemoveButton'
import { useHistory } from 'react-router-dom'


function WeatherApp({ city, remove }) {
    const { name, sys, weather, main, coord, id } = city


    const history = useHistory()
    const GoGraphic = () => history.push(`/${id}`)


    return (
        <li className="city_info" >
            <RemoveButton remove={remove} id={id} />
            <div onClick={GoGraphic}>
                <h3 className="city_name">{name}, {sys.country}</h3>
                <div className="weather_info" >
                    <h3 className="main_weather">
                        {weather[0].main}
                    </h3>
                    <p className="description">
                        {weather[0].description}
                    </p>
                    <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="icon" />
                </div>
                <div className="min_temp">
                    min temp :  &nbsp; {main.temp_min} °C
                </div>
                    <div className="max_temp">
                        max temp :  &nbsp; {main.temp_max} °C
                </div>
                <div className="location">
                    location:  &nbsp; {coord.lon}, {coord.lat}
                </div>
            </div>
        </li>
    )
}

export default WeatherApp
