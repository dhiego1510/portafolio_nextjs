  "use client";
   
  import { motion, useScroll, useTransform } from "framer-motion";
  import Image from "next/image";
  import Link from "next/link";
  import { useRef } from "react";
   

  const items = [
    {
      id: 1,
      title: "App Info País",
      desc: "aplicacion API REST. Utiliza MongoDB como base de datos para almacenar y gestionar los datos de manera eficiente y escalable",
      img: "/countries.png",
      link: "https://github.com/JavierRuizArango/code_minds",
    },
    {
      id: 2,
      title: "Next.js Medium  ",
      desc: "Ésta es mi tarjeta de presentación personal, una página web sencilla que incluye mi foto, información personal y enlaces a mis redes sociales. ",
      img: "/card-bussines.png",
      link: "https://dhiego1510.github.io/project-business-card/",
    },
     
    {
      id: 3,
      title: "Todo-List ",
      desc: "To-Do list es una aplicación web que te permite crear una lista de tareas,añadir por categoría y marcarlas como completadas",
      img: "/todo-list.png",
      link: "https://to-do-list-reto-final.vercel.app/",
    },
     
    
  ];

  const PortfolioPage = () => {
    
    return (
      <div className="container-portfolio">
        
         
          <div className="title">My Works</div>
          <div className="container-works">
            {items.map(item => (
              
              <div className="item-container" key={item.id}>

                <div className="item">
                  <h1 className="title-work">{item.title}</h1>
                  <div className="container-image">
                  <Link href={item.link} target="_blank">
                    <Image src={item.img} alt="" className="image-work" width={300} height={200} />
                    <span className="ver-text">Ver</span>
                  </Link>
                    
                  </div>
                  <div>
                  <p>{item.desc}</p>
                  </div>

                  
                  
                </div>

              </div>
              ))}
          </div>
        
      </div>
       
    );
  };

  export default PortfolioPage;
