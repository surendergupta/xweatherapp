import { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const base_endpoint = "https://api.weatherapi.com/v1/current.json";
  const API_KEY="b87ac71319cc4ae7bc1131700232109";

  const handleSearchClick = async () => {
    if(city) {
      try {
        setLoading(true);
        setResult("");
        const response = await fetch(`${base_endpoint}?key=${API_KEY}&q=${city}`);
        const data = await response.json();
        if(data.error) {
          setCity("");
          alert('Failed to fetch weather data');
          return false;
        }
        setResult(data);
      } catch (error) {
        alert('Failed to fetch weather data');
      }
      setLoading(false);
    }
  }
  console.log(result);
  return (
    <div className="App">
      <div className='search'>
        <input 
          type="text" 
          placeholder="Enter city name" 
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="button" onClick={ handleSearchClick}>Search</button>
      </div>

      { loading && <p>Loading data...</p> }
      { result && (
        <div className='weather-cards'>
          <div className='weather-card'>
            <h4>Temperature</h4>
            <p>{result.current.temp_c}°C</p>
          </div>
          <div className='weather-card'>
            <h4>Humidity</h4>
            <p>{result.current.humidity}%</p>
          </div>
          <div className='weather-card'>
            <h4>Condition</h4>
            <p>{result.current.condition.text}</p>
          </div>
          <div className='weather-card'>
            <h4>Wind Speed</h4>
            <p>{result.current.wind_kph} kph</p>
          </div>
        </div>
      ) }      
    </div>
  );
}

export default App;
