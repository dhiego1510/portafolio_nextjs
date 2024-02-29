import React from 'react'
 import '../css/home.css'
 import Image from 'next/image';

export default function Home() {
  return (
    <div className='container-home'>

      <div className='image-container'>
         
        <image>
          <img src="/foto-mar.jpeg" className='image-profile' fill    />
        </image>
      </div>

      <div className='text-container'>
        <h1>Hola, soy Diego
          Desarrolo de Software 
        </h1>
         
        <p> lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
      </div>

      <div className='button-container'>
        
        <button className='button-contact'>Contactame</button>
        <button className='button2'>Descarga Cv</button>
      </div>

    </div>
  )
}
