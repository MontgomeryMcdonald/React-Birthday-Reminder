import BirthdayCard from './BirthdayCard'
function GetAllEvents(events){    
    
    function getDate(dateObj){
        console.log(dateObj)
        console.log(typeof dateObj)
        const month   = dateObj.getUTCMonth() + 1; 
        const day     = dateObj.getUTCDate();
        const year    = dateObj.getUTCFullYear();
        return month + "/" + day + "/" + year;
    }
    
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