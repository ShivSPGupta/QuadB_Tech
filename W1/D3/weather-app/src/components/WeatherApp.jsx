import React, { useState, useEffect } from 'react';

const API_KEY = '701219e8713d24254ef1271c2c1e0fc5';

function WeatherApp() {
  const [city, setCity] = useState('Delhi');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error('City not found!');
      const data = await res.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
    const intervalId = setInterval(fetchWeather, 10 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">🌤 Advanced Weather App</h1>

      <form onSubmit={handleSearch} className="flex gap-4 mb-6">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="px-4 py-2 text-lg border border-gray-300 rounded shadow"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-700">Loading weather...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {weatherData && (
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md text-center">
          <h2 className="text-2xl font-semibold">{weatherData.name}</h2>
          <p className="text-lg mt-2">{weatherData.weather[0].description.toUpperCase()}</p>
          <p className="mt-2">🌡 Temp: {weatherData.main.temp}°C</p>
          <p>💧 Humidity: {weatherData.main.humidity}%</p>
          <p>🌬 Wind: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
