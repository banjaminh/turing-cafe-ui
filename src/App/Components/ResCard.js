import './ResCard.css'


function ResCard({id,name,date,time,number,deleteRes}){
    
    return (
        <div className='res-card'>
            <p>{name}</p>
            <p>{date}</p>
            <p>{time}</p>
            <p>Number of guests: {number}</p>
            <button onClick={() => deleteRes(id)}>Cancel</button>
        </div>
    )

}

export default ResCard