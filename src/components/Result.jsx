import React from 'react'

const Result = () => {
  return (
    <div className='shadow-xl mt-5 p-3'>
      <h2 className='text-4xl text-center'>City Name</h2>
      <div className="text-2xl flex justify-around my-2">
        <div>Max Temp: 40deg</div>
        <div>Min Temp: 40deg</div>
      </div>
      <div className="text-2xl flex justify-around my-2">
        <div>Icon</div>
        <div>Weather Type</div>
      </div>
    </div>
  )
}

export default Result;