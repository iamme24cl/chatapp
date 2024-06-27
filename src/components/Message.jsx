import React from 'react'

const Message = () => {
  return (
    <div
      className={`message`}
    >
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Message