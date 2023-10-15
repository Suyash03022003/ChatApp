import React, { useState } from 'react'
import styles from './footer.module.css'
import { ReactComponent as Mention } from '../../images/mention.svg'
import { ReactComponent as Send } from '../../images/airplane.svg'
import { ReactComponent as Smily } from '../../images/smily.svg'
import messages from '../messanger/data.js';
import { ReactComponent as Read } from '../../images/read.svg'

export default function Footer({message, setMessage}) {
  const [input, setInput] = useState("");

  const sendMessage = () => {
    const lastId = messages[messages.length - 1].messageId;
    const newMessage = {
      messageId: lastId + 1,
      user: "Me",
      text: input,
      time: formatTime(new Date()),
      seen: <Read></Read>
    };
    setMessage([...message, newMessage]);
    console.log(message);
  }

  const inputChange = (event) => {
    const { name, value } = event.target;
    setInput(value);
    console.log(input);
  }

  const formatTime = (date) => {
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    return date.toLocaleTimeString('en-US', options);
  };

  return (
    <div className={styles.footer}>
      <Smily width="2%" height="auto" />
      <input onChange={inputChange} type="text" placeholder='Start Typing...' />
      <Mention width="2%" height="auto" />
      <Send onClick={sendMessage} width="2%" />
    </div>
  )
}