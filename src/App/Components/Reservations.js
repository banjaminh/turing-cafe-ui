import './Reservations.css'
import ResCard from './ResCard.js'

function Reservations({res , deleteRes}){

    console.log("RES", res)


    const resCards = res.map(res => {
        return (
            <ResCard 
                key={res.id}
                id={res.id}
                name={res.name}
                date={res.date}
                time={res.time}
                number={res.number}
                deleteRes={deleteRes}
            />
        )
    })
    console.log("RESCARDS", resCards)

    return (
        <div className='rescard-container'>
            {resCards}
        </div>
    )
}

export default Reservations