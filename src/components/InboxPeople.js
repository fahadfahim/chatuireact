import React,{useState,useEffect} from 'react'
import ActiveChat from './ActiveChat'
import ChatList from './ChatList'
import HeadingSearch from './HeadingSearch'

import users from '../user.json'
function InboxPeople() {

    return (
        <div className="inbox_people">
          <HeadingSearch />
        <div className="inbox_chat">
          <ActiveChat name='John Doe' date='Dec 25' msg='Test, which is a new approach to have all solutions 
              astrology under one roof.'/>
          {users.map(user => {
            return(
              <>
              <ChatList key={user.id} name={user.name} date={user.date} msg={user.msg} />
              </>
            )
          })} 
        </div>
      </div>
    )
}

export default InboxPeople
