  "use client";
  
  import Image from "next/image";
  import Link from "next/link";
 

  const items = [
    {
      id: 6,
      title: "Java Poo Citas Médicas",
      desc: " Este proyecto implementa un sistema de gestión de citas médicas para hospitales, permitiendo a doctores, pacientes y enfermeras gestionar sus citas disponibles y programadas de manera efectiva.",
      img: "/javaPoo.png",
      link: "https://github.com/dhiego1510/Medical-appointments-Java",
      skills: "Java, Intellij IDEA",
    },
    {
      id: 0,
      title: "Chat en tiempo real",
      desc: "App de chat en tiempo real que utiliza Socket.IO para la comunicación entre clientes y el servidor. Desarrollado con Node.js, Express y React con Vite.js para la interfaz, y estilizado con Tailwind CSS.",
      img: "/chat.png",
      link: "https://github.com/dhiego1510/Chat_Nodejs_Socketio",
      skills: "Node.js, Express, Socket.IO, React, Tailwind CSS",
    },
    {
      id: 1,
      title: "App Info País",
      desc: "Aplicacion API REST con Next.js. Utiliza MongoDB como base de datos para almacenar y gestionar los datos de manera eficiente y escalable, usa React para la interfaz de usuario y Express.js para el servidor. ",
      img: "/countries.png",
      link: "https://github.com/JavierRuizArango/code_minds",
      skills: "Next.js, React, Node.js, Express, MongoDB, GraphQL ",
    },
    {
      id: 2,
      title: "Follow Card Twitter",
      desc: "Este proyecto es un clon de tarjetas de seguimiento de Twitter, donde se muestran usuarios con la opción de seguirlos o dejar de seguirlos. Cada tarjeta incluye el nombre, nombre de usuario y su avatar obtenido de la API de Unavatar.",
      img: "/card.png",
      link: "https://github.com/dhiego1510/twitter-follow-card/tree/master",
      skills: "React, Vite.js, CSS ",
    },
    {
      id: 3,
      title: "Tarjeta con React",
      desc: "Ésta es mi tarjeta de presentación personal, una página web sencilla que incluye mi foto, información personal y enlaces a mis redes sociales. ",
      img: "/card-bussines.png",
      link: "https://dhiego1510.github.io/project-business-card/",
      skills: "Vite.js, React, CSS ",
    },
     
    {
      id: 4,
      title: "Todo-List ",
      desc: "To-Do list es una aplicación web que te permite crear una lista de tareas,añadir por categoría y marcarlas como completadas.",
      img: "/todo-list.png",
      link: "https://to-do-list-reto-final.vercel.app/",
      skills: "Html, Css, Javascript",
    },
    {
      id: 5,
      title: "Barberia website ",
      desc: "Barberia website es una página web sencilla con html y css puro, que incluye sección home, una sección de productos, un formulario de contacto.",
      img: "/barber.png",
      link: "https://barbershop-website-three.vercel.app/",
      skills: "Html, Css",
    },
     
     
  ];

  const PortfolioPage = () => {
    
    return (
      <div className="container-portfolio">
        
         
          <div className="title">Mis Trabajos</div>
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
                   

                    <div className="skills-container">

                      {item.skills.split(", ").map((skill, index) => (
                      <div className="skills" key={index}>
                        {skill}
                      </div>
                       ))}

                    </div>

                  </div>

                  
                  
                </div>

              </div>
              ))}
          </div>
        
      </div>
       
    );
  };

  export default PortfolioPage;
