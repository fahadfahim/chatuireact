import React from 'react'
import InboxPeople from './InboxPeople'
import Messages from './Messages'

function InboxMessage() {
    return (
        <div className="inbox_msg">
        <InboxPeople />
        <Messages />
        </div>
    )
}

export default InboxMessage
