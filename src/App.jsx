import Search from './components/Search';
import Result from './components/Result'
import { useState } from 'react';

function App() {

  const [search, setSearch] = useState("CityName");
  const [weather, setWeather] = useState([]);

  const userSearch =  (value) => {
    setSearch(value);
  };

  return (
    <div className="max-w-[1240px] mx-auto mt-2 p-3">
      <Search searchData={search} eventHandler={userSearch}/>
      <Result weather={weather}/>
    </div>
  );
}

export default App;
