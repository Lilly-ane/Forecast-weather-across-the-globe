import React, { useState } from 'react';

function WeatherForm({ onSubmit }) {
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(city);
    setCity('');
  };

  return (
    <form className="weather-form" onSubmit={handleSubmit}>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Insert a city name" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default WeatherForm;