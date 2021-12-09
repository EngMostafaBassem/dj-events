import React from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
const Header=()=>{
 return(
     <header className={styles.header}>
        <div className={styles.logo}>
            <Link href="/"> DJ EVENTS</Link>              
        </div>
        <ul>
            <li><Link href="/">Events</Link></li>   
        </ul>
     </header>
 )
}
export default Header