import React, { useState} from 'react'

const WeatherCaed = ({weather, temp}) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const handleClick = () =>{
    setIsCelsius(!isCelsius)
  }
  
  return (
    <article className='card'>
     <header className='card__header'>
     <h1 className='card__title'>Wheather App</h1>
      <h2 className='card__subtitle'>{weather?.name}, {weather?.sys.country}</h2>
     </header>
      

    <section className='card__icon-container'>
    <img className='card__icon' src={weather && ` http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}  />
      
    </section>

    <section className='card__info'>
    <h3 className='card__description'>"{weather?.weather[0].description}"</h3>
      <ul className='card__list'> 
        <li className='card__item'><span className='card__span'>Wind Speed</span> {weather?.wind.speed}m/s</li>
        <li className='card__item'><span className='card__span'>Clouds</span> {weather?.clouds.all}%</li>
        <li className='card__item'><span className='card__span'>Pressure</span> {weather?.main.pressure} hPa</li>
      </ul>
    </section>

    <h3 className='card__temp'>{
      isCelsius ? 
      `${temp?.celsius} °C` 
      :
      `${temp?.farenheit} °F`
    } 
    </h3>
    
    <footer className='card__footer'>
      <button className='card__btn' onClick={handleClick}>Degrees °F/°C</button>
    </footer>
      
    </article>

    
  )
}

export default WeatherCaed