import { useState } from 'react'

import Form from './Form'
import GetDailyEvents from './GetDailyEvents'
import GetMonthlyEvents from './GetMonthlyEvents'
import GetAllEvents from './GetAllEvents'

const Birthday = () => {

    const [events, setEvents] = useState([{eventName: "December Fourth", eventDate: new Date("12/25/2025"), id: 0}])
    
    function handleFormInput(){
        console.log("handling form input...")
        setEvents([...events, {eventName : document.getElementById("event-name").value, eventDate : new Date(document.getElementById("event-date").value), id:events.length}])
        console.log(events)
    }

    // function getWeeklyEvents(){

    // }
    // function getOtherEvents(){

    // }

  return (
    <div>
    <Form handleFormInput={handleFormInput}/>
    <GetDailyEvents events={events} />
    <GetMonthlyEvents events={events}/>
    <GetAllEvents events={events} />
    </div>
  )
}

export default Birthday