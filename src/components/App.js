import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';

export default function App() {

  const [weatherData] = useState({
    temperature: 25,
    conditions: 'Sunny'
  });

  return (
    <div >
      <h2>Weather Dashboard</h2>
      <WeatherDisplay weather={weatherData} />
    </div>
  );
}