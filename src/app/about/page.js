"use client"
import React from 'react'
import '@/css/about.css'
import Image from 'next/image'
import Link from 'next/link'
export default function AboutPage() {

  return (
    <div className='container-about'>
      {/* Container content */}
      <div className='container-content'>
        {/* Biography */}
        <div className='biography'>
          <h1>Biography</h1>
          <p>¡Hola! Soy Diego, un desarrollador Full Stack con una fascinación por la creatividad y la innovación en el mundo del software y la tecnología. Soy músico hace mas de 10 años lo que ha influido significativamente en mi enfoque hacia el desarrollo, permitiéndome adoptar una perspectiva única y creativa en cada proyecto en el que trabajo.  
          </p>  
          <p>Estoy entusiasmado por la posibilidad de colaborar con equipos dinámicos y contribuir al desarrollo de proyectos que transformen el mundo digital y mejoren la experiencia de usuario. Si estás buscando un desarrollador Full Stack comprometido, creativo y orientado al éxito, ¡me encantaría ser parte de tu equipo y ayudarte a alcanzar tus objetivos!</p>
          <span>
          Descubre el ritmo de la innovación.
          </span>
          <div className='social' >
      <Link href="https://github.com/dhiego1510" target="_blank">
          <Image src="/github.png" alt="" width={28} height={26} />
        </Link>
        <Link href="https://www.linkedin.com/in/diego-arias-car/" target="_blank">
          <Image src="/linkedin.png" alt="" width={28} height={26} />
        </Link> 
        <Link href="https://www.instagram.com/dhiego_1510/" target="_blank">
          <Image src="/instagram.png" alt="" width={28} height={26} />
        </Link>
      </div>
          
          <div className='svg'>
          <svg
              viewBox="0 0 24 24"
              fill="none" 
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </svg>
          <Image src="/foto.jpg" width={200} height={200} alt='profile2'   className='image'/>
         
          </div>
            
        </div>
        {/* biography */}

      {/**contaier skills */}
      <div className='container-skills'>
        <h1>SKILLS</h1>
        {/* skills lists */}
        <div className='s-list'>
          <div className='skill'>JavaScript </div>
          <div className='skill'>React.js</div>
          <div className='skill'>Next.js</div>
          <div className='skill'>Node.js</div>
          <div className='skill'>Express.js</div>
          <div className='skill'>WebSocket</div>
          <div className='skill'>Socket.IO</div>
          <div className='skill'>HTML</div>
          <div className='skill'>CSS</div>
          <div className='skill'>Tailwind CSS</div>
          <div className='skill'>MongoDB</div>
          <div className='skill'>PostgreSQL</div>
          <div className='skill'>Poo Java</div>   
          <div className='skill'>GraphQL</div>   
          <div className='skill'>Postman</div>   
          <div className='skill'>Git</div>
          <div className='skill'>GitHub</div>
        </div>
      </div>  
      {/* container skills */}
      <div className=''>
       
      </div>
      </div>
      {/* container content*/}
      
    </div>
  )
}
