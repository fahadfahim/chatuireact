import React from 'react'
import {FaPaperPlane} from 'react-icons/fa'
function TypeMessage() {
    return (
        <div className="type_msg">
          <div className="input_msg_write">
            <input type="text" className="write_msg" placeholder="Type a message" />
            <button className="msg_send_btn" type="button"><FaPaperPlane /></button>
          </div>
        </div>
    )
}

export default TypeMessage
