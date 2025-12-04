import React from 'react'

const Form = ({handleFormInput}) => {
  return (
    <div className="form events">
    <h3>Event Name</h3>
    <input type="text" name="" id="event-name" />
    <h3>Please Insert a Date Below</h3>
    <input type="date" name="" id="event-date" />
    <button onClick={() => handleFormInput()}>Submit Date</button>
    </div>
  )
}

export default Form