import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import WeatherContainer from './components/WeatherContainer';


function App() {
  const [weather, setWeather] = useState(null);


const success = (pos) => {
  
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;
  const API_KEY = "b9bfe343ca073ba8052ed7379c219222";

  axios
  .get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    )
    .then(({data}) => setWeather(data))
    .catch((err) => console.log(err));
  
};

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  },[]);
  return (
    <main className='font-["Lato"] flex justify-center 
    items-center min-h-screen bg-black text-white px-2'
    style={{ backgroundImage: `url(/dia.jpeg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
  {
    weather === null ? (
      <h3><img src="/Vector.png" alt="loading..." /></h3>
    ) : (<WeatherContainer weather={weather}/>)
  }
     
    </main>
  );
}

export default App
