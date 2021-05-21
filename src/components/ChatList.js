import React from 'react'

function ChatList({name,date,msg}) {
    return (
        <div className="chat_list">
        <div className="chat_people">
          <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
          <div className="chat_ib">
            <h5>{name}<span className="chat_date">{date}</span></h5>
            <p>{msg}</p>
          </div>
        </div>
      </div>
    )
}

export default ChatList
