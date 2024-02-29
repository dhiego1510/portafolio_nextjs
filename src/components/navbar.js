"use client"
import React, { useState } from 'react'
import '../css/navbar.css'
import Link from 'next/link'
import NavLink from './navlink'


const links = [
  { url: "/", title: "Home"},
  { url: "/about", title: "About"},
  { url: "/portfolio", title: "Portfolio"},
]

export default function NavBar() {
  const [open, setOpen] = useState(false);
 
  return (
    <div className='navbar '>

      {/*  Navegation  */}
      <div className='nav-link'>
      {links.map(link=>(
            <NavLink link={link} key={link.title}/>
          ))}
      </div>
 
      {/* Responsive menu */}
      <div className='container-burguer'>

        <button className='button-burguer' onClick={() => setOpen(!open)}>
          <div className='menu-burguer'></div>
          <div className='menu-burguer'></div>
          <div className='menu-burguer'></div>
        </button>

        {/* Menu list clic burguer*/}

        {open &&
          <div className='nav-burguer'>
          {links.map(link=>(
            <Link key={link.title} href={link.url}>{link.title}</Link>
          ))}
        </div>
        }
        
      </div>
    </div>
  )
}
