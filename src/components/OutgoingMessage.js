import React from 'react'

function OutgoingMessage({msg,time,date}) {
    return (
        <div className="outgoing_msg">
        <div className="sent_msg">
          <p>{msg}</p>
          <span className="time_date">{time}   |    {date}</span> </div>
      </div>
    )
}

export default OutgoingMessage
