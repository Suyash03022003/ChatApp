import React  from 'react'
import styles from './footer.module.css'
import { ReactComponent as Mention } from '../../images/mention.svg'
import { ReactComponent as Send } from '../../images/airplane.svg'
import { ReactComponent as Smily } from '../../images/smily.svg'

export default function Footer() {
    return (
      <div className={styles.footer}>
        <Smily width="2%" height="auto" />
        <input type="text" placeholder='Start Typing...' />
        <Mention width="2%" height="auto" />
        <Send width="2%" height="auto" />
      </div>
    )
}