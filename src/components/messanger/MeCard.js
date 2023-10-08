import React from "react";
import styles from './mecard.module.css';

const Card = (props) => {
    return (
        <div className={styles.mainCard}>
            <div className={styles.MemessageContainer}>
                <p className={styles.text}>{props.text}</p>
                <div className={styles.time}>{props.time}<span className={styles.read}>{props.seen}</span></div>
            </div>
        </div>
    );
}

export default Card