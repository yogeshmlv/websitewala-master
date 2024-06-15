"use client"
import React, { useState } from 'react';
import styles from './links.module.css';
import NavLink from './navlink/navLink';
import Image from 'next/image';

const links = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Services",
        path: "/service",
    },
    {
        title: "Works",
        path: "/work",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },
];

const session = true;
const isAdmin = false;

const Link = () => {
    const [open, setOpen] = useState(false);
    
    const handleLinkClick = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);
        }
        setOpen(false);
    };
    

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map(link => (
                    <NavLink item={link} key={link.title} onClick={handleLinkClick}/>
                ))}
                {session ? (
                    <>
                        {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }}onClick={handleLinkClick} />}
                        {/* <button className={styles.Logout}>Logout</button> */}
                    </>
                ) : (
                    <NavLink item={{ title: "Login", path: "/login" }}onClick={handleLinkClick} />
                )}
            </div>
            <Image className={styles.menuButton} src ="/menu.png" alt="" width={30} height={30}  onClick={() => setOpen(!open)}/>
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map(link => (
                        <NavLink item={link} key={link.title}onClick={handleLinkClick} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Link;
