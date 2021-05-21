import React from 'react'
import IncomingMessage from './IncomingMessage'
import OutgoingMessage from './OutgoingMessage'
import TypeMessage from './TypeMessage'

function Messages() {
    return (
        <div className="mesgs">
        <div className="msg_history">
        <IncomingMessage msg="hi how are you" time="11:01 AM" date="Nov 12"/>
        <OutgoingMessage msg="i am fine what about you" time="11:02 AM" date="Nov 12"/>
        <IncomingMessage msg="i am fine too what are you doing now ...??" time="11:03 AM" date="Nov 12"/>
        <OutgoingMessage msg="nothing you ...??" time="11:02 AM" date="Nov 12"/>
        <IncomingMessage msg="chating with you ;) :)...??" time="11:02 AM" date="Nov 12"/>
        <OutgoingMessage msg="did you know about our exam when it's started" time="11:02 AM" date="Nov 12"/>
        </div>
        <TypeMessage />
      </div>
    )
}

export default Messages
