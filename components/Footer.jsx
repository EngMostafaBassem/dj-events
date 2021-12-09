import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'
const Footer=()=>{
    return(
        <footer className={styles.footer}>
           <p>Copyright © DJ Events 2021</p>
           <Link href="/about"><a>About This Project</a></Link>
        </footer>
    )

}
export default Footer