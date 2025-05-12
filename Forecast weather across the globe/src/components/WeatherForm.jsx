import React, { useState } from "react";

function WeatherForm({ onSubmit }) {
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(city);
    }
    setCity("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="Insert a city name"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default WeatherForm;
