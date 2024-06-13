import Link from 'next/link';
import React from 'react'
import Links from './links/Links'
import  styles from'./navbar.module.css'
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
     <Link href='/' className={styles.logo}><Image src="/gorakhpurlogo.png" alt="" fill className={styles.logoImage}/></Link>
    <div>  
        <Links/>
    </div>
    </div>
  )
}

export default Navbar;
