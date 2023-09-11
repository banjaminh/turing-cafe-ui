import './App.css';
import {React, useEffect, useState} from 'react';
import Form from './Components/Form'
import { fetchReservations } from './apiCalls'

function App() {
  
  const [res,setRes] = useState('');
  
  useEffect(() => {
    fetchReservations()
    .then(data => {
      console.log(data)
      setRes(data)})
  },[])

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form />
      </div>
      <div className='resy-container'>
      </div>
    </div>
  );
}

export default App; 