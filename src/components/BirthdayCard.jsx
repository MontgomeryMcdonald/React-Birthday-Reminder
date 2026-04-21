

const BirthdayCard = (data) => {


  function getDate(dateObj){
    const day     = dateObj.getUTCDate();
    const year    = dateObj.getUTCFullYear();
    const month   = dateObj.getUTCMonth() + 1; 
    return month + "/" + day + "/" + year;
  }

    function daysUntil(end){
        return  Math.floor((end - new Date()) / (1000 * 3600 * 24))
    }

  console.log(data)
  return (
            <div id={data.data.id} className="card">
                <h3>{data.data.eventName}</h3>
                <p>{getDate(data.data.eventDate)}</p>
                <p>{daysUntil(data.data.eventDate)}</p>
            </div>
        )
}

export default BirthdayCard