import React from 'react';

function WeatherCard({ city, temperature, description, icon }) {
  return (
    <div className="weather-card">
      {city && <h2 className="weather-card__city">{city}</h2>}
      {temperature && <p className="weather-card__temperature">Temperature: {temperature}°C</p>}
      {description && <p className="weather-card__description">{description}</p>}
      {icon && (
        <img
          className="weather-card__icon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
      )}
    </div>
  );
}

export default WeatherCard;