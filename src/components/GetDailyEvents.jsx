import BirthdayCard from './BirthdayCard'
function GetDailyEvents(events){    
    
    function getDate(dateObj){

        const day     = dateObj.getUTCDate();
        const year    = dateObj.getUTCFullYear();
        const month   = dateObj.getUTCMonth(); 
        return month + "/" + day + "/" + year;
    }
    
    
    
    let todaysEvents = events.events.filter((eventObj) => {
        if(getDate(eventObj.eventDate) === getDate(new Date(Date.now()))){
            return eventObj
        }
    })
    
    return(
        <div className='events events-today'>
            <h1>Today's Events</h1>
            <div className="eventToday eventDiv">
            {todaysEvents.map((eventObj) => {
                return (
                        <BirthdayCard data={eventObj} />
                    )
                })}
            </div>
        </div>
    )
}

export default GetDailyEvents