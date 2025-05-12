import './App.css';
import WeatherCard from './components/WeatherCard';
import WeatherDetails from './components/WeatherDetails';
import WeatherForm from './components/WeatherForm';
import React, { useState, useEffect } from 'react';
import WeatherService from './components/WeatherService';

function App() {
  const [city, setCity] = useState("Warwick");
  const [weatherData, setWeatherData] = useState(null);


  useEffect(() => {
    const loadWeatherData = async () => {
      const data = await WeatherService.getWeatherDataByCity(city);
      //console.log(data); 
        setWeatherData(data);
      setWeatherData(data);
    };

    loadWeatherData();
  }, [city]);

  const handleCitySubmit = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Forecast weather across the globe</h1>
      <WeatherForm onSubmit={handleCitySubmit} />
      {weatherData && <WeatherCard {...weatherData} />}
      {weatherData && <WeatherDetails {...weatherData?.main} {...weatherData?.wind} />}
    </div>
  );
}

export default App;