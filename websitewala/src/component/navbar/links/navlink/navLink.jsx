"use client";
import React from 'react'
import styles from './navLink.module.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link';


function NavLink({ item,onClick }) {
    const pathName = usePathname();
    return (
        <div className={styles.container}>
            <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`} onClick={onClick}>{item.title}</Link>
        </div>
    )
}

export default NavLink
