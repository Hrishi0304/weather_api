import React from 'react';
import { useRef } from 'react';

const Search = (props) => {

  const searchInput = useRef();

  return (
    <div className='flex shadow-xl'>
      <input type="search" value={props.searchData} className='border border-black p-3 w-full text-2xl' onChange={() => {props.eventHandler(searchInput.current.value)}} ref={searchInput} />
      <button onClick={props.searchWeather} className='bg-slate-600 text-white p-3'>Search</button>
    </div>
  );
}

export default Search;