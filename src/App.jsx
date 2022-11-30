
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import WeatherCaed from './componen/WeatherCaed'



  
  
  function App() {

    

    const [coords, setCoords] = useState()
    const [weather, setWeather] = useState()
    const [temp, setTemp] = useState()

    const success = pos => {
      setCoords({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude

      })
    }

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(success)

    }, [])

    useEffect(() => {
     if(coords){
      const ApiKey = '17990fa387265e65be806558256596ec'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${ApiKey}`

      axios.get(URL)
        .then(res=> {
          setWeather(res.data)
          const celsius = (res.data.main.temp -273.15).toFixed(1)
          const farenheit = (celsius * 9/5 + 32).toFixed(1)
          setTemp({celsius,farenheit})
        
     })
        .catch(err=> console.log(err))
     } 
    
    }, [coords])
    
    


  return (
    <div className="App">
      <WeatherCaed
        weather={weather}
        temp={temp}
      />
    </div>
  )
}

export default App
