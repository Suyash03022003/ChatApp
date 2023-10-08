import React  from 'react'
import styles from './header.module.css'
import { ReactComponent as Group } from '../../images/group.svg'
import { ReactComponent as Icon } from '../../images/Icon.svg'

export default function Header() {
    return (
      <div className={styles.header}>
        <Group className={styles.group} width="9%" height="auto"/>
        <div className={styles.teamHead}>
            <p className={styles.head}>🦄 Team Unicorn</p>
            <p className={styles.desc}>last seen 45 minutes ago</p>
        </div>
        <Icon className={styles.icon} width='2%' height='auto' />
      </div>
    )
}