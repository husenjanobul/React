import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'
import WeatherApp from './components/WeatherApp'

function App() {
  const [cities, setCities] = useState([])
  const [name, setName] = useState(' ')
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getCity = async () => {
    setLoading(true)
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
      if (res.ok) {
        const data = await res.json()
        const noRepeat = cities.filter(city => city.id !== data.id)
        setCities([data, ...noRepeat])
        setLoading(false)
        setError(false)
      } else {
        setError(true)
      }
    }
    catch (error) {
      console.log(error.message);
    }
  }

  const remove = id => {
    const currentCities = cities.filter(city => city.id !== id)
    setCities(currentCities)
  }

  return (

    <div className="App">
      <h1 className="title">Weather</h1>
      <div className="form">
        <input type="text" placeholder="search city" value={name} onChange={(e) => setName(e.target.value)} />
        <Form getCity={getCity} />
      </div>
      {
        isLoading && error === false &&
        <p className="loading">Loading...</p>
      }

      {
        name === ' '   && cities.length === 0 && <h4 className="insert-name">Please insert city name.</h4>
      }

      {
        error && <p className="warning">Please check the city's name and insert again.</p>
      }

      {
        cities.length !== 0  && 
        <ul className="city_list">
          {cities.map(city => <WeatherApp key={city.id} city={city} remove={remove} />)}
        </ul>
      }

    </div>
  );
}

export default App;
