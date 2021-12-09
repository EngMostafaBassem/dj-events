import React from 'react'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Footer from './Footer'
import Header from './Header'
import ShowCase from './ShowCase'
import {useRouter} from 'next/router'
const Layout=({title,desc,keywords,children})=>{
    const router=useRouter()
    return(
        <>
           <Head >
            <title>{title}</title>
            <meta name='description' content={desc}/>
            <meta name='keywords' content={keywords}/>
           </Head>
           <Header/>
           {router.pathname=='/'&& <ShowCase/>}    
           <div className={styles.container}>  
            {children}
           </div>
        <Footer/>
        </>
    )
}
Layout.defaultProps={
    title:'DJ Events | Find the hottest parties',
    desc:'Find the latest DJ and other musical events',
    keywords:'music, dj, edm, events'
}
export default Layout