import React from 'react'
// import IncomingMessages from '../IncomingMessages.json'
function IncomingMessage({msg,time,date}) {
    return (
      
        <div className="incoming_msg">
            <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
            <div className="received_msg">
              <div className="received_withd_msg">
                <p>{msg}</p>
                <span className="time_date"> {time}    |    {date}</span></div>
            </div>
          </div>
    )
}

export default IncomingMessage
