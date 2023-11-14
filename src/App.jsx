import Search from './components/Search';
import Result from './components/Result';
import {useState } from 'react';
import axios from 'axios';

function App() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  
  const userSearch =  (value) => {
    setSearch(value);
  };

  const searchWeatherHandler = () => {
    if(search !==""){
      const params = {
        access_key: '004f093149a20dbecfbd4ae89a1f5cd6',
        query: search
      }

      axios.get(`https://api.weatherstack.com/current`,{params})
      .then(
        (response) => {
          const apiResponse = response.data;
          // console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
          console.log('API Response:', apiResponse);
          setWeather(apiResponse);

        }
      ).catch(
        (error) => {
          console.log("API error",error);
        }
      )
    }
  }

  return (
    <div className="max-w-[1240px] mx-auto mt-2 p-3">
      <Search searchData={search} searchWeather={searchWeatherHandler} eventHandler={userSearch}/>
      <Result weatherData={weather}/>
    </div>
  );
}

export default App;
