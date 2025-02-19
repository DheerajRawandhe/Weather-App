import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Info.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LightModeIcon from '@mui/icons-material/LightMode';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}) {

  const INIT_URL = "https://images.unsplash.com/photo-1561471026-0bbb77535d25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHVzdHklMjB3ZWF0aGVyJTIwaWFtZ2V8ZW58MHx8MHx8fDA%3D";


  const HOT_URL = "https://media.istockphoto.com/id/1370790869/photo/sun-on-sky-with-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=v9H4U5c9uVfQ94k_SFpr189ZWN5OR4KyhiLzdTqh3SQ=";  
  
  const COLD_URL = "https://media.istockphoto.com/id/1179644604/photo/christmas-tree-snowstorm.jpg?s=612x612&w=0&k=20&c=9f3fLJV42aMwwbCOWFZHz6-HZSsSsJ5mCDozzHZjHt8=";

  const RAIN_URL = "https://www.istockphoto.com/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-gm1257951336-368822698";



  // let info = {
  //   city : "Delhi",
  //   feelLike : 11.45,
  //   humidity : 82,
  //   temp : 12.05,
  //   tempMax : 12.05,
  //   tempMin : 12.05,
  //   weather: "mist",
  // }

  return (
    <>
    <div className="infoBox"> 

    <div className='card'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        // image={INIT_URL}    
        image={info.humidity > 80  ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}  
        title="green iguana"
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
         <b> {info.city}</b> &nbsp;
        {info.humidity > 80  ? <ThunderstormIcon/> : info.temp > 15 ? <LightModeIcon/> : <AcUnitIcon/> }  
        </Typography>
        
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>

       {/* <h1>Temprature = {info.temp}&deg;C</h1> */}
 
       <h1 className='temp-cloud'> {info.temp}&deg;C</h1>
       <h2>Humidity = {info.humidity}</h2>
       <h2>Min Temp = {info.tempMin}&deg;C</h2> 
       <h2>Max Temp = {info.tempMax}&deg;C</h2>
       <p >The Weather can be describe as <b>{info.weather} </b>  and feels like = {info.feelLike }&deg;C</p>

        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    </>
  )
}
