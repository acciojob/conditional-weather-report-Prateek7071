import React from 'react';

export default function WeatherDisplay(props) {

  const { temperature, conditions } = props.weather;
  const tempColor = temperature > 20 ? 'red' : 'blue';

  return (
    <div>
      <p>
        Temperature: <span style={{ color: tempColor }}>{temperature}°C</span>
      </p>
      <p>
        Conditions: {conditions}
      </p>
    </div>
  );
}