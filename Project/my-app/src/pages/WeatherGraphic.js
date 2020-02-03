import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'

function WeatherGraphic() {
    const [city, setCity] = useState({})
    const [list, setList] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [hasError, setError] = useState(false)

    const { id } = useParams()

    const history = useHistory()
    const back = () => history.push('/')

    async function fetchForecast() {
        setLoading(true)
        try{
            const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
            const data = await res.json()
            setList(data.list)
            setCity(data.city)
            setLoading(false)
        }catch(err){
            setError(true)
            throw Error(err)
        }
    }

    useEffect(() => {
        fetchForecast()
    }, [id])

    return (
        <div>
            <div className="back_div">
                <button onClick={back} type="submit" className="back_btn">Back</button>
            </div>
            <div className="info_chart" >
                {hasError  && <h3>Oops something went wrong.</h3>}
                {isLoading && <p>Loading...</p>}
                <h1>5 Days Forecast</h1>
                <h3>{city.name} _ {city.country}</h3>
                <ResponsiveContainer>
                    <AreaChart data={list} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="dt_txt" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="main.temp" strok="#daf800" fill="#7099e6" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default WeatherGraphic
