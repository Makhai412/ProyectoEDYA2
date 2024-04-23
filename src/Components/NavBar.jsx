import React, { useState } from 'react'
import { Link } from 'react-scroll'
import styles from './NavBar.module.css'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import logoImg from '../../Images/Logo.png';



export const NavBar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);
    const links=[
    {
        id:1,
        link: "Terror",
    },
    {
        id:2,
        link: "CienciaFiccion",
    },
    {
        id:3,
        link: "Infantil",
    },
    
  ]
  
    return (
    <div className={!navBarOpen ? styles.navBar: styles.navOpen}>
        <img src={logoImg} alt="Logo" className={styles.logoImg}/>
        <p className={styles.textNavBar}>Cartelera Prueba</p>
        <p className={styles.textNavBar}>Categoría</p>
        {!navBarOpen ? (<IoIosArrowDown className={styles.arrow} onClick={()=> setNavBarOpen(!navBarOpen)} size={20}/>):
        (<IoIosArrowUp onClick={()=> setNavBarOpen(!navBarOpen)} size={20} className={styles.arrow}/>)}
        {
        navBarOpen && 
        <ul>
        {links.map(x=>(
            <div>
            <Link
            onClick={()=> setNavBarOpen(false)} 
            smooth duration={500} className={styles.navLink}>
            {x.link === "Categoria" ? "Categoría" : x.link=== "CienciaFiccion" ? "Ciencia Ficción" : x.link} <br/></Link>
            </div>
        ))}
    </ul>
    }
    </div>
  )
}


