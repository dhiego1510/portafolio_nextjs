import React from 'react'
import '@/css/about.css'
import Image from 'next/image'
export default function AboutPage() {

  return (
    <div className='container-about'>
      {/* Container content */}
      <div className='container-content'>
        {/* Biography */}
        <div className='biography'>
          <h1>Biography</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil officiis doloremque aspernatur voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil officiis doloremque aspernatur voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          
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
          <Image src="/foto.jpg" width={200} height={200}  className='image'/>
         
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
          <div className='skill'>CSS</div>
          <div className='skill'>HTML</div>
          <div className='skill'>MongoDB</div>
          <div className='skill'>PostgreSQL</div>
          <div className='skill'>Poo Java</div>
          <div className='skill'>Git</div>
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
