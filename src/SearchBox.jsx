import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Search.css";  
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
  
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "3d05b16a5521e7415fd938ea6e611114"; 


  let getWeatherInfo = async () => {
    try{
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city : city,
        temp : jsonResponse.main.temp,
        tempMin : jsonResponse.main.temp_min,      
        tempMax : jsonResponse.main.temp_max,      
        humidity : jsonResponse.main.humidity,        
        feelLike: jsonResponse.main.feels_like,
        weather : jsonResponse.weather[0].description,
  
      }
      console.log(result);
      return result;
    }catch(err) {
      throw err;
    }
   
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try{
    event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
  }catch(err) {
    // setError("No such place in our API");
    setError(true);
  }
  };

  return (
    <>
    <div className='search-box'>
    <h3>Search for the Weather</h3>

    <form onSubmit={handleSubmit} action="">
      <TextField id="city" label="City Name" variant="outlined" value={city} 
      onChange={handleChange}  required /> <br /><br />
      <Button variant="contained" type='submit' onSubmit={handleSubmit}>Search</Button>

      {error && <h2 className='no-place'>No such place exiest!</h2>}
    </form>
    </div>
    </>
  )
}
