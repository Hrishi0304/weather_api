import React from 'react';

const Search = () => {
  return (
    <div className='flex shadow-xl'>
      <input type="search" className='border border-black p-3 w-full text-2xl' />
      <button className='bg-slate-600 text-white p-3'>Search</button>
    </div>
  )
}

export default Search;