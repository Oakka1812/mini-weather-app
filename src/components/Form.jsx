import React, { useRef } from 'react'

const Form = ({fetchWeather}) => {
  const searchText = useRef('');

  const searchHandler = () => {
    fetchWeather(searchText.current.value);
    searchText.current.value = '';           
  }
  return (
    <div className='d-flex gap-2'>
      <input type="text" ref={searchText} className='form-control' placeholder='Enter city...'/>
      <input type="button" value="Search" className='btn bg-black text-white px-3 rounded-2' onClick={() => searchHandler()}/>
    </div>
  )
}

export default Form
