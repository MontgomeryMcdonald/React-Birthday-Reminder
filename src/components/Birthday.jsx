import { useState } from 'react'

import Form from './Form'
import GetAllEvents from './GetAllEvents'

const Birthday = () => {

    const [events, setEvents] = useState([{eventName: "Moxks-HRT", eventDate: new Date("8/17/2026"), id: 0}])
    
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
    <GetAllEvents events={events} />
    </div>
  )
}

export default Birthday