import BirthdayCard from './BirthdayCard'
function GetAllEvents(events){    
    
    
    return(
        <div className='events events-today'>
            <h1>This Year's Events</h1>

            <div className="eventAll eventDiv">
            {events.events.map((eventObj) => {
                return (
                        <BirthdayCard data={eventObj} />
                    )
                })}
            </div>
        </div>
    )
}

export default GetAllEvents