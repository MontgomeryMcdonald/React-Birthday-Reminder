

const BirthdayCard = (data) => {


  function getDate(dateObj){
        console.log(dateObj)
        console.log(typeof dateObj)
    const day     = dateObj.getUTCDate();
    const year    = dateObj.getUTCFullYear();
    const month   = dateObj.getUTCMonth() + 1; 
    return month + "/" + day + "/" + year;
  }

  console.log(data)
  return (
            <div id={data.data.id} className="card">
                <h3>{data.data.eventName}</h3>
                <p>{getDate(data.data.eventDate)}</p>
            </div>
        )
}

export default BirthdayCard