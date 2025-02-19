import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import "./Weather.css";
import { useState } from 'react';


export default function WeatherApp() {

  const [weatherInfo , setWeatherInfo] = useState({
      city : "Delhi",
      feelLike : 11.45,
      temp : 12.05,
      tempMax : 12.05,
      tempMin : 12.05,
      humidity : 82,
      weather: "mist",
    
  })

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return (
    <>
    <div className='weather-app-bg'>
      <h1 className='weather'>Weather App</h1>
      <div className='weather-app'>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} /> 
      </div>

    </div>
    </>
  )
}
