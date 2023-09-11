import './App.css';
import {React, useEffect, useState} from 'react';
import Form from './Components/Form'
import { fetchReservations } from './apiCalls'
import Reservations from './Components/Reservations'

function App() {
  
  const [res,setRes] = useState('');
  
  useEffect(() => {
    fetchReservations()
    .then(data => {
      console.log(data)
      setRes(data)})
  },[])

  function deleteRes(id){
    console.log("DELETE RES: ", id);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form />
      </div>
      {res && <div className='resy-container'>
        <Reservations res={res} deleteRes={deleteRes}/>
      </div>}
    </div>
  );
}

export default App; 