import React, { useState } from 'react';
import styles from './messenger.module.css';
import messages from './data';
import MeCard from "./MeCard";
import UserCard from "./UserCard";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
}

export default function Messenger() {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <div className={styles.messengerBody}>
      <p className={styles.dateHeading + " " + styles.head}>{currentDate}</p>
      <div>
        {messages.map((card) => {
          if (card.user === "Me") {
            return <MeCard key={card.messageId} {...card}></MeCard>;
          } else {
            return <UserCard key={card.messageId} {...card}></UserCard>; 
          }
        })}
      </div>
    </div>
  );
}
