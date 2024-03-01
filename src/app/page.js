import React from 'react'
import '../css/home.css' 
import Link from 'next/link'
import Image from 'next/image'
export default function Home() {
  return (
    <div className='container-home'>
      <div className='container-flex'>
        <div className='image-container'>
          <img src="/foto-mar.jpeg" className='image-profile' alt='profile' fill="true" />
        </div>

        <div className='text-container'>
          <h1>Hola, soy Diego
            Desarrollador Full Stack
          </h1>

          <p> ¡Bienvenido a mi mundo digital! ¡Explora mis proyectos y únete a mí en mi viaje de desarrollo!</p>
 
        </div>
      </div>
      <div className='button-container'>
        
        <a href="mailto:dhiego1510@gmail.com" className='button-contact'>Contactame</a>
        <button className='button2'>Descarga Cv</button>
        
      </div>
      
    </div>
  )
}
