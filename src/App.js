import axios from "axios"
import React from "react"
import { useState } from "react"
import "./App.css"

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=852a4d59f4f449ab7444c206044d28aa`

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation("")
    }
  }

  return (
    <div className='app'>
      <div className='search'>
        <input
          className='input'
          type='text'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder='Enter Location'
          onKeyPress={searchLocation}
        />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            <h1>{data.main ? <h1>{data.main.temp}F</h1> : null}</h1>
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            {data.main ? <p>{data.main.feels_like}F</p> : null}

            <h4>feels like</h4>
          </div>
          <div className='humidity'>
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <h4>humidity is</h4>
          </div>
          <div className='wind'>
            {data.wind ? <p>{data.wind.speed}MPH</p> : null}
            <h4>wind speed is</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
