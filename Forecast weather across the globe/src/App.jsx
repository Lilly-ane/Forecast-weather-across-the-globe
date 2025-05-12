
import './App.css'
import WeatherCard from './components/WeatherCard'
import WeatherDetails from './components/WeatherDetails'
import WeatherForm from './components/WeatherForm'

function App() {
 const [weatherData, setWeatherData] = useState(null);

  return (
    <>
     <h1> Forecast weather across the globe"</h1>
     <WeatherCard/>
     <WeatherForm/>
     <WeatherDetails/>
    </>
  )
}

export default App
