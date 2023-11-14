import React from 'react';

const Result = ({weatherData}) => {
  // if (!weatherData) {
  //   return <div>No data available</div>;
  // }

  if (!weatherData.location) {
    return <div>No location data available</div>;
  }
  
  const cityName = weatherData.location.name;
  const temperature = weatherData.current.temperature;
  const weatherIcon = weatherData.current.weather_icons;
  const weatherType = weatherData.current.weather_descriptions;

  return (
    <div className='shadow-xl mt-5 p-3'>
      <h2 className='text-4xl text-center'>City Name: {cityName}</h2>
      <div className="text-2xl flex justify-around mt-4 my-2">
        <div>Temp: {temperature}</div>
      </div>
      <div className="text-2xl flex justify-around my-2">
        <div>
          <img src={weatherIcon[0]} alt="weatherIcon" />
        </div>
        <div>{weatherType}</div>
      </div>
    </div>
  );
}

export default Result;