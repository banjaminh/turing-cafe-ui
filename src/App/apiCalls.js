

export function fetchReservations(){
    return fetch('http://localhost:3001/api/v1/reservations')
            .then(response => {
                if(response.ok){
                    return response.json()
                }
                else{
                    throw new Error("There was an issue fetching reservations")
                }
            })
}


export function postReservation(res){
    return fetch('http://localhost:3001/api/v1/reservations', {
        method: 'POST',
        body: JSON.stringify(res), // remember how HTTP can only send and receive strings, just like localStorage?
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(response.ok){
            return response.json();
        }
        else{
            throw new Error('There was an issue posting the reservation')
        }
    })
}

export function deleteReservation(id){
    return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(response.ok){
            return response.json()
        }
        else{
            throw new Error('There was an issue deleting that reservation');
        }
    })
}