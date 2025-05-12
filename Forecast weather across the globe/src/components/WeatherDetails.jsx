// src/components/WeatherDetails.js
import React from 'react';

const WeatherDetails = ({ humidity, windSpeed }) => {
  return (
    <div className="weather-details">
      <p>Humidity:{humidity}%</p>
      <p>windSpeed:{windSpeed} m/s</p>
    </div>
  );
};

export default WeatherDetails;
