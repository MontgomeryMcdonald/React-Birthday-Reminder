const DisplayCardBase = (data) => {
  return (
    <ul>
    {data.data.map((item) => {
        return ( 
            <li>
                {item.worm}
            </li>
        )
    })}
    </ul>
  )
}

export default DisplayCardBase