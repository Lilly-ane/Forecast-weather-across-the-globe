const API_KEY = '24d42a66a86be7be76646bdd7a31ac96';

const WeatherService = {
  async getWeatherDataByCity(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      console.log("URL cerere API:", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Nu s-au putut obține datele meteo.');
      }

      const data = await response.json();

      return {
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        humidity: data.main?.humidity, 
        windSpeed: data.wind?.speed,   
      };
    } catch (error) {
      console.error('Eroare la obținerea datelor meteo:', error);
      throw error;
    }
  },
};

export default WeatherService;