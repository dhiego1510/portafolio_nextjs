"use client"
import React, { useState } from 'react'
import '../css/navbar.css'
import Link from 'next/link'
import NavLink from './navlink'
import { motion } from 'framer-motion'
import Image from 'next/image'

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
]

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };
   
  return (
    <div className='navbar '>

      {/*  Navegation  */}
      <div className='nav-link'>
        {links.map(link => (
          <NavLink link={link} key={link.title}  />
        ))}
      </div>
      

      {/* Responsive menu */}
      <div className='container-burguer'>

        <button className='button-burguer' onClick={() => setOpen(!open)}>
          <motion.div 
          variants={topVariants} 
          className='menu-burguer'
          animate={open ? "opened" : "closed"}
          ></motion.div>

          <motion.div 
          variants={centerVariants} 
          className='menu-burguer'
          animate={open ? "opened" : "closed"}
          ></motion.div>

          <motion.div 
          variants={bottomVariants} 
          className='menu-burguer'
          animate={open ? "opened" : "closed"}
          ></motion.div>

        </button>

        {/* Menu list clic burguer*/}

        {open &&
          <div className='nav-burguer'>
            {links.map(link => (
              <Link key={link.title}  href={link.url} onClick={handleCloseMenu}>{link.title} </Link> 
              
            ))}
            
          </div>
        }
        
      </div>
    </div>
  )
}
