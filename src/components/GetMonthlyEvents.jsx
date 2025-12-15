import BirthdayCard from './BirthdayCard'
function GetMonthlyEvents(events){    
    console.log(events)
    let monthEvents = events.events.filter((eventObj) => {
        if(eventObj.eventDate.getUTCMonth() === new Date(Date.now()).getUTCMonth() && eventObj.eventDate.getUTCFullYear() === new Date(Date.now()).getUTCFullYear()){
            return eventObj
        }
        return null
    })

    return(
        <div className='events events-today'>
            <h1>This Month's Events</h1>
                <div className="eventMonth eventDiv">
                    {monthEvents.map((eventObj) => {
                        return (
                                <BirthdayCard data={eventObj} />
                            )
                        })}
                </div>
        </div>
    )
}

export default GetMonthlyEvents