import React from "react";
import styles from './usercard.module.css';

const Card = (props) => {
    const svg = props.svg;
    return (
        <div className={styles.mainCard}>
            <span className={styles.svg}>{svg}</span>
            <div className={styles.messageContainer}>
                <div className={styles.cardHead}>{props.user}<span className={styles.unbold}>{props.designation}</span></div>
                <div className={styles.card}>
                    <p className={styles.text}>{props.text}</p>
                    <div className={styles.time}>{props.time}</div>
                </div>
            </div>
        </div>
    );
}

export default Card