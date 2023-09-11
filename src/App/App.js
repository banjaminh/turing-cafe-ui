import './App.css';
import {React, useEffect, useState} from 'react';
import Form from './Components/Form'
import { fetchReservations, postReservation, deleteReservation } from './apiCalls'
import Reservations from './Components/Reservations'

function App() {
  
  const [res,setRes] = useState('');
  
  useEffect(() => {
    fetchReservations()
    .then(data => {
      console.log(data)
      setRes(data)})
    .catch(error => {
      alert(error.message)
    })    
    },[])

  function deleteRes(id){
    deleteReservation(id)
    .then(data => {
      const updatedRes = res.filter(res => res.id != id);
      setRes(updatedRes)
    })
  }

  function addRes(name,date,time,guests){
    const newRes = {
      id: Date.now(),
      name: name,
      time: time,
      date: date,
      number: guests,
    }
    postReservation(newRes)
    .then(data => setRes([...res, data]))
    .catch(error => alert(error.message))
  }

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form addRes={addRes}/>
      </div>
      {res && <div className='resy-container'>
        <Reservations res={res} deleteRes={deleteRes}/>
      </div>}
    </div>
  );
}

export default App; 