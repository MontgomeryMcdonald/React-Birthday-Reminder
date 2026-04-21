import { useState } from 'react'

import GetAllEvents from './GetAllEvents'

const Birthday = () => {

    const [events, setEvents] = useState([{eventName: "Moxks-HRT", eventDate: new Date("8/17/2026"), id: 0}])
    

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