import { onSnapshot, doc } from 'firebase/firestore';
import React, { useEffect, useState, useContext } from 'react';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      
      return () => {
        unsub();
      }
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  console.log(Object.entries(chats)) ;
  return (
    <div className="chats">
      {Object.entries(chats)?.map((chat) => (
        <div
          className="userChat"
          key={chat[0]}
        >
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
      </div>
    ))}
  </div>
  )
}

export default Chats;