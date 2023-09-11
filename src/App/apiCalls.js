

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