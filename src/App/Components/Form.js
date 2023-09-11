import './Form.css'
import {useState, useEffect} from 'react'


function Form( {submitRes} ){
    const [name,setName] = useState('');
    const [date,setDate] = useState('');
    const [time,setTime] = useState('');
    const [guests,setGuests] = useState('');

    function gatherReservation(){
        submitRes(name,date,time,guests);
    }


    return (
        <>
            <input id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'></input>
            <input id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Date(mm/dd)'></input>
            <input id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Time'></input>
            <input id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Number of guests (10 max)'></input>
            <button id='res-button' onClick={gatherReservation}>Make Reservation</button>
        </>

    )
}

export default Form