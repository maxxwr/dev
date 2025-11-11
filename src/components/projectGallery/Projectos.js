import React from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard, ProjectCardBackend } from "./ProyectoCard";
import projImg1 from "../../assets/img/api-dniruc.jpg";
import projImg2 from "../../assets/img/api-stripe.jpg";
import projImg3 from "../../assets/img/apkmovile.jpeg";
import projImg4 from "../../assets/img/ruc-dni.jpg";
import projImg5 from "../../assets/img/panel-invent1.jpeg";
import projImg6 from "../../assets/img/phpconex.jpg";
import projImg7 from "../../assets/img/pasarela1.jpg";
import projImg8 from "../../assets/img/iber.jpeg";
import projImg9 from "../../assets/img/unity.jpeg";
import projImg10 from "../../assets/img/AI.gif";
import projImg11 from "../../assets/img/reco.gif";
import projImg12 from "../../assets/img/datos.gif";
import projImg13 from "../../assets/img/analisis.gif";
import projImg14 from "../../assets/img/app.jpg";
import projImg15 from "../../assets/img/api-tcambio.jpg";
import projImg16 from "../../assets/img/api-chat.jpg";
//import colorSharp2 from "../assets/img/react.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "../../color/projectGallery/Projectos.css"
import { BackgroundAnimation } from "../fxHub/animation";
import { FaGithub, FaChartLine, FaCode, FaDesktop } from 'react-icons/fa';
import { LuCpu } from "react-icons/lu";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectsTabsNav } from "../navPanel/ProjectsTabsNav";

const BackendRevealItem = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, filter: "blur(5px)" }}
      animate={inView ? {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.7,
          delay,
          ease: "easeOut"
        }
      } : { opacity: 0, y: 60, filter: "blur(5px)" }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

const FrontendRevealItem = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        rotateY: 90,
        scale: 0.8
      }}
      animate={inView ? {
        opacity: 1,
        rotateY: 0,
        scale: 1,
        transition: {
          duration: 0.8,
          delay,
          ease: "easeOut"
        }
      } : {
        opacity: 0,
        rotateY: 90,
        scale: 0.8
      }}
      style={{
        width: "100%",
        transformStyle: "preserve-3d"
      }}
    >
      {children}
    </motion.div>
  );
};

const AIRevealItem = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.95,
        filter: "brightness(0.5) blur(10px)"
      }}
      animate={inView ? {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "brightness(1) blur(0px)",
        transition: {
          duration: 0.8,
          delay,
          ease: "easeOut"
        }
      } : {
        opacity: 0,
        y: 50,
        scale: 0.95,
        filter: "brightness(0.5) blur(10px)"
      }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

const RailwayTextEffect = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0.4,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.4, filter: "blur(2px)" }}
      animate={inView ? {
        opacity: 1,
        filter: "blur(0px)",
        color: "#ffffff",
        textShadow: "0 0 15px rgba(255, 255, 255, 0.5)"
      } : {
        opacity: 0.4,
        filter: "blur(2px)",
        color: "#94a3b8",
        textShadow: "none"
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export const Projects = () => {
  const frontendProjects = [
    {
      title: "Landing Page Responsive",
      features: ["Este proyecto implementa lógica avanzada de responsive design y optimización SEO para garantizar máxima compatibilidad y visibilidad en buscadores."],
      imgUrl: projImg4,
      technologies: ["React", "Node", "CSS3", "JavaScript ES6"],
      description: [
        "100% responsive",
        "Optimizada para SEO",
        "Manejo de dependencias con NPM",
        "Deploy en plataforma cloud"
      ],
      githubLink: "#"
    },
    {
      title: "Web Dinámica",
      features: ["Este proyecto implementa un sistema completo de acceso con personalización avanzada y seguridad robusta."],
      imgUrl: projImg7,
      technologies: ["React", "Node", "CSS3", "JavaScript ES6"],
      description: [
        "Conexión a base de datos",
        "Autenticación JWT para manejo de sesiones",
        "Integración con Stripe.",
        "Validación de datos en frontend y backend"
      ],
      githubLink: "#"
    },
    {
      title: "Sistema Web de Inventario",
      features: ["Este proyecto implementa un panel web dinámico para control y manejo estructurado de información."],
      imgUrl: projImg5,
      technologies: ["PHP", "MySQL", "HTML", "CSS3", "JavaScript"],
      description: [
        "CRUD completo para control de datos.",
        "Autenticación con sesiones seguras.",
        "Interfaz adaptable con navegación lateral.",
        "Validaciones integradas para registro e ingreso de usuarios."
      ],
      githubLink: "#"
    },
    {
      title: "E-Commerce",
      features: ["Este proyecto implementa una plataforma web con autenticación de usuarios y pedidos."],
      imgUrl: projImg6,
      technologies: ["PHP", "MySQL", "HTML", "CSS3", "JavaScript"],
      description: [
        "Módulo CRUD funcional para control de registros",
        "Autenticación de usuarios",
        "Pedidos conectados a base de datos",
        "Interfaz dinámica con validaciones de formulario"
      ],
      githubLink: "#"
    }
  ];

  const backendProjects = [
    {
      title: "API REST con Java Spring Boot",
      features: [
        "Servicio RESTful para autenticación y consultas seguras de información, con seguridad JWT y Swagger."
      ],
      imgUrl: projImg1,
      technologies: ["Java", "Spring Boot", "Spring Security + JWT", "Data JPA", "MySQL"],
      githubLink: "#"
    },
    {
      title: "API de Tipo de Cambio",
      features: [
        "Servicio RESTful para validar y emitir comprobantes electrónicos y consulta de tipo de cambio, con seguridad JWT y Swagger."
      ],
      imgUrl: projImg15,
      technologies: ["Java", "Spring Boot", "Spring Security + JWT", "Data JPA", "MySQL"],
      githubLink: "#"
    },
    {
      title: "API Pasarela de Pago",
      features: [
        "E-commerce con microservicios para tienda en línea con pagos seguros vía STRIPE."
      ],
      imgUrl: projImg2,
      technologies: ["Node.js", "Express.js", "React", "MySQL", "JWT", "Stripe"],
      githubLink: "#"
    },
    {
      title: "API Sistema de Mensajería",
      features: [
        "WebSocket con autenticación JWT para chat en tiempo real, rooms privados, y almacenamiento historial de mensajes."
      ],
      imgUrl: projImg16,
      technologies: ["Go", "Gorilla WebSocket", "MySQL", "JWT", "SQLX", "godotenv"],
      githubLink: "#"
    }
  ];

  const mobileProjects = [
    {
      title: "App Estilo Uber",
      features: [
        "Desarrollo de una app con geolocalización en tiempo real y mapas integrados."
      ],
      imgUrl: projImg8,
      technologies: ["Kotlin", "SQLite", "Google Maps API"],
      description: [
        "Mapas interactivos y seguimiento de ubicación en vivo",
        "Autenticación básica y manejo local de datos",
        "Optimizada para dispositivos Android"
      ],
      githubLink: "#"
    },
    {
      title: "App Recordatorios",
      features: [
        "Organiza tareas con recordatorios locales, guardado offline y Material UI."
      ],
      imgUrl: projImg14,
      technologies: ["Kotlin", "SQLite", "Material Design"],
      description: [
        "Creación, edición y eliminación de tareas",
        "Notificaciones locales configurables",
        "Interfaz limpia con Material Design"
      ],
      githubLink: "#"
    },
    {
      title: "App Realidad Aumentada",
      features: [
        "Aplicacion con cámara integrada para mostrar modelos 3D en RA."
      ],
      imgUrl: projImg9,
      technologies: ["Unity", "C#", "Vuforia SDK"],
      description: [
        "Integración con Vuforia SDK para RA",
        "Renderizado de modelos 3D interactivos",
        "Compatibilidad con cámaras móviles",
        "Experiencia inmersiva para visualización educativa"
      ],
      githubLink: "#"
    },
    {
      title: "App Registro de Datos",
      features: [
        "Aplicacion móvil que permite registrar y consultar datos fácilmente, con interfaz intuitiva y fluida"
      ],
      imgUrl: projImg3,
      technologies: ["C#", "Xamarin", "SQL Server"],
      description: [
        "Permite registrar, editar y eliminar datos",
        "Conexión base de datos",
        "Interfaz adaptable y ligera para dispositivos móviles.",
        "Generada como APK desde Visual Studio 2022."
      ],
      githubLink: "#"
    }

  ];

  const aiProjects = [
    {
      title: "Chatbot Inteligente",
      features: [
        "Desarrollo de un chatbot avanzado basado en modelos de lenguaje y redes neuronales profundas, optimizado con técnicas de Deep Learning.",
      ],
      imgUrl: projImg10,
      technologies: ["Python", "TensorFlow", "Flask", "Transformers"],
      description: [
        "Procesamiento de lenguaje natural (NLP) para entender y responder preguntas.",
        "Entrenamiento con TensorFlow para aprendizaje profundo.",
        "Integración con Flask para comunicación web.",
      ],
      githubLink: "#",
    },
    {
      title: "Sistema de Recomendación",
      features: [
        "Sistema que sugiere contenido personalizado utilizando técnicas de Machine Learning.",
      ],
      imgUrl: projImg11,
      technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
      description: [
        "Modelo entrenado en dataset de películas para encontrar similitudes.",
        "Visualización interactiva con Streamlit.",
        "Basado en similitud de contenido usando vectores de características.",
      ],
      githubLink: "#",
      link: "https://mlcinema.streamlit.app/",
    },
    {
      title: "Clasificador de Datos",
      features: [
        "Modelo de clasificación implementado con Random Forest y comparado con redes neuronales profundas.",
      ],
      imgUrl: projImg12,
      technologies: ["Python", "Scikit-learn", "NumPy", "TensorFlow"],
      description: [
        "Entrenamiento de modelos supervisados en dataset estructurado.",
        "Comparación de métricas entre enfoques de IA tradicionales y redes neuronales.",
        "Evaluación con matrices de confusión y precisión.",
      ],
      githubLink: "#",
    },
    {
      title: "Análisis de Sentimientos",
      features: [
        "Modelo de IA que analiza y clasifica sentimientos en texto en positivo, negativo o neutro.",
      ],
      imgUrl: projImg13,
      technologies: ["Python", "NLTK", "Pandas", "Deep Learning"],
      description: [
        "Preprocesamiento de texto con técnicas de NLP.",
        "Entrenamiento del modelo en dataset de reseñas.",
        "Visualización de resultados de sentimiento en interfaz web.",
      ],
      githubLink: "#",
    },
  ];

  const aboutMeData = {
    title: "Sobre mi",
    sections: [
      {
        type: "personal",
        name: "max winchez",
        content: "Ingeniero de Software especializado en backend, frontend e inteligencia artificial.",
        details: ["Cuento con experiencia en el desarrollo de sistemas completos, implementando autenticaciones seguras, analisis de datos y aprendizaje profundo DL/ML.", "Enfocado en crear sistemas inteligentes que transformen datos en soluciones efectivas."]
      },
      {
        type: "education",
        title: "Ingeniería Superior en Programación",
        content: "Formación Superior en Programación e IA en SENATI, Lima",
        details: ["- graduado en 2024"]
      }
    ],
    certifications: {
      title: "Certificaciones",
      items: [
        { id: 1, name: "Cisco Networking Academy – Get Connected", description: "Fundamentos de redes y tecnología digital" },
        { id: 2, name: "Cisco Networking Academy – Introducción a la Seguridad Cibernética", description: "Principios de seguridad y protección de datos en entornos digitales" },
        { id: 3, name: "Cisco Networking Academy – Introduccion a la IoT", description: "Arquitectura y aplicaciones del IoT en sistemas inteligentes" },
        { id: 4, name: "Ciencia de Datos y Big Data", description: "Análisis de datos, Machine Learning y Deep Learning " }
      ]
    }
  };

  const backendSkills = {
    title: "Tech Skills",
    categories: [
      {
        title: "Frameworks & Libraries",
        technologies: ["Spring Boot", "Express.js (Node.js)", ".NET Framework", "TensorFlow"]
      },
      {
        title: "APIs & Integrations",
        technologies: ["REST API", "JWT Authentication", "Stripe API", "WebSocket", "Flask API"]
      },
      {
        title: "Databases",
        technologies: ["MySQL", "SQL Server", "NoSQL (MongoDB)"]
      },
      {
        title: "Tools & Environment",
        technologies: ["Postman", "Maven", "dotenv", "Swagger", "CORS"]
      }
    ]
  };

  const projectTexts = {
    title: ["Proyectos"],
    description: [
      "Aquí puedes explorar algunos de mis proyectos en los que he trabajado,",
      "incluyendo desarrollo web e inteligencia artificial."
    ]
  };

  const projectCategories = {
    frontend: ["Frontend"],
    backend: ["Backend"],
    mobile: ["Móviles"],
    ai: ["Inteligencia Artificial"],
  };

  return (
    <section className="project" id="projects">
      <BackgroundAnimation />
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <RailwayTextEffect>
                    <h2>{projectTexts.title[0]}</h2>
                  </RailwayTextEffect>

                  <RailwayTextEffect>
                    <p>
                      {projectTexts.description.map((linea, index) => (
                        <React.Fragment key={index}>
                          {linea}<br />
                        </React.Fragment>
                      ))}
                    </p>
                  </RailwayTextEffect>
                  <Tab.Container id="projects-tabs" defaultActiveKey="backend">

                    <ProjectsTabsNav /> {/*para el tab nabvar*/}

                    <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="frontend">
                        <div className="projects-vertical-container" style={{ paddingLeft: '0' }}>
                          {frontendProjects.map((project, index) => (
                            <FrontendRevealItem
                              key={index}
                              delay={index * 0.2}
                              direction={index % 2 === 0 ? "left" : "right"} // ← alternancia
                            >
                              <div
                                className={`project-item-container animate-on-scroll ${index % 2 === 0 ? 'image-right' : 'image-left'}`}
                              >

                                {/* CONTENEDOR PRINCIPAL DEL PROYECTO */}
                                <div className="project-main-content">

                                  {/* CONTENEDOR DE IMAGEN */}
                                  <div className="image-container">
                                    <ProjectCard {...project} />

                                  </div>

                                  {/* CONTENEDOR DE DESCRIPCIÓN */}
                                  <div className="description-container">
                                    <span className="project-category">{projectCategories.frontend[0]}</span>
                                    <div className="features-container">
                                      <h3 className="project-title">{project.title}</h3>
                                      <ul>
                                        {project.features.map((feature, featureIndex) => (
                                          <li key={featureIndex}>
                                            <FaDesktop className="frontend-bullet-icon" /> {feature}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>

                                    <div className="actions-container">
                                      <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="action-btn secondary"
                                      >
                                        {/* Icono de GitHub de React Icons */}
                                        <FaGithub />
                                        {project.githubLink ? ' Ver Código' : ' Privado'}
                                      </a>
                                    </div>
                                    <br />
                                    <div className="tech-container">
                                      <div className="tech-tags-container">
                                        {/* Mapea las tecnologías del proyecto */}
                                        {project.technologies.map((tech, techIndex) => (
                                          <span key={techIndex} className="tech-tag">{tech}</span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </FrontendRevealItem>
                          ))}
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="backend">
                        <div className="backend-projects-vertical-container" style={{ paddingLeft: '0' }}>
                          {backendProjects.map((project, index) => (
                            <BackendRevealItem
                              key={index}
                              delay={index * 0.3}
                            >
                              <div className={`backend-project-item-container ${index % 2 === 0 ? 'backend-image-right' : 'backend-image-left'}`}>

                                <div className="backend-project-main-content">

                                  {/* CONTENEDOR DE IMAGEN */}
                                  <div className="backend-image-container">
                                    <ProjectCardBackend
                                      title={project.title}
                                      imgUrl={project.imgUrl}
                                    />
                                  </div>

                                  {/* CONTENEDOR DE DESCRIPCIÓN */}
                                  <div className="backend-description-container">
                                    <span className="backend-project-category">{projectCategories.backend[0]}</span>
                                    <div className="backend-features-container">
                                      <h3 className="backend-project-title">{project.title}</h3>
                                      <ul>
                                        {project.features.map((feature, featureIndex) => (
                                          <li key={featureIndex}>
                                            <FaCode className="backend-bullet-icon" /> {feature}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>

                                    <div className="backend-actions-container">
                                      <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="backend-action-btn secondary"
                                      >
                                        <FaGithub />
                                        {project.githubLink ? ' Ver Código' : ' Privado'}
                                      </a>
                                    </div>
                                    <br />
                                    <div className="backend-tech-container">
                                      <div className="backend-tech-tags-container">
                                        {project.technologies.map((tech, techIndex) => (
                                          <span key={techIndex} className="backend-tech-tag">{tech}</span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr className="backend-divider" />
                            </BackendRevealItem>
                          ))}

                          <div className="backend-extra-section">
                            <h3 className="backend-section-title">{aboutMeData.title}</h3>
                            <br />

                            {/* MAIN SECTIONS */}
                            <div className="backend-extra-grid">
                              {aboutMeData.sections.map((section, index) => (
                                <div key={index} className={`backend-extra-left ${section.type === 'personal' ? 'no-background' : ''}`}>

                                  {section.type === 'personal' ? (
                                    <>
                                      <h4>{section.name}</h4>
                                      <h3 className="backend-section-description">{section.content}
                                        <br /><br />
                                        {section.details.map((detail, i) => (
                                          <span key={i}>
                                            {detail}
                                            {i === section.details.length - 2 && <><br /></>}
                                            <br />
                                          </span>
                                        ))}
                                      </h3>
                                    </>
                                  ) : (
                                    <>
                                      <h4>{section.title}</h4>
                                      <h3 className="backend-section-description">
                                        <span className="education-content">{section.content}</span>
                                        <br /><br />
                                        {section.details.map((detail, i) => (
                                          <span key={i} className="education-detail">{detail}</span>
                                        ))}
                                      </h3>
                                    </>
                                  )}
                                </div>
                              ))}
                            </div>
                            <br />

                            {/* CERTIFICATIONS */}
                            <h4 className="backend-section-subtitle">{aboutMeData.certifications.title}</h4>
                            <br />
                            <div className="certifications-grid">
                              {/* Split certifications into 2 columns */}
                              {[0, 2].map((startIndex, colIndex) => (
                                <div key={colIndex} className={colIndex === 0 ? "certifications-extra-left" : "certifications-extra-right"}>
                                  <ul className="certifications-list">
                                    {aboutMeData.certifications.items.slice(startIndex, startIndex + 2).map((cert) => (
                                      <li key={cert.id}>
                                        <span className="cert-name">{cert.name}</span>
                                        <br />
                                        <span className="cert-description">{cert.description}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>

                            {/* SKILLS SECTION */}
                            <br /><br />
                            <h4 className="backend-section-subtitle">{backendSkills.title}</h4>
                            <br />

                            <div className="backend-skills-grid">
                              {backendSkills.categories.map((category, index) => (
                                <div key={index} className="backend-skill-category">
                                  <h5 className="backend-skill-category-title">{category.title}</h5>
                                  <div className="backend-skills-tags-container">
                                    {category.technologies.map((tech, techIndex) => (
                                      <span key={techIndex} className="backend-skill-tag">{tech}</span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="mobile">
                        <div className="projects-vertical-container" style={{ paddingLeft: '0' }}>
                          {mobileProjects.map((project, index) => (
                            <BackendRevealItem
                              key={index}
                              delay={index * 0.2}
                              direction={index % 2 === 0 ? "left" : "right"}
                            >
                              <div
                                className={`project-item-container animate-on-scroll ${index % 2 === 0 ? 'image-right' : 'image-left'}`}
                              >
                                {/* CONTENEDOR PRINCIPAL DEL PROYECTO */}
                                <div className="project-main-content">

                                  {/* CONTENEDOR DE IMAGEN */}
                                  <div className="image-container">
                                    <ProjectCard {...project} />
                                  </div>
                                  {/* CONTENEDOR DE DESCRIPCIÓN */}
                                  <div className="description-container">
                                    <span className="project-category">{projectCategories.mobile[0]}</span>
                                    <div className="features-container">
                                      <h3 className="project-title">{project.title}</h3>
                                      <ul>
                                        {project.features.map((feature, featureIndex) => (
                                          <li key={featureIndex}>{feature}</li>
                                        ))}
                                      </ul>
                                    </div>

                                    <div className="actions-container">
                                      <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="action-btn secondary"
                                      >
                                        <FaGithub />
                                        {project.githubLink ? ' Ver Código' : ' Privado'}
                                      </a>
                                    </div>
                                    <br />
                                    <div className="tech-container">
                                      <div className="tech-tags-container">
                                        {project.technologies.map((tech, techIndex) => (
                                          <span key={techIndex} className="tech-tag">{tech}</span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </BackendRevealItem>
                          ))}
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="ai">
                        <div className="ai-projects-container" style={{ paddingLeft: '0' }}>
                          {aiProjects.map((project, index) => (
                            <AIRevealItem
                              key={index}
                              delay={index * 0.2}
                              direction={index % 2 === 0 ? "left" : "right"}
                            >
                              <div
                                className={`ai-project-item animate-on-scroll ${index % 2 === 0 ? 'image-right' : 'image-left'
                                  }`}
                              >
                                {/* CONTENEDOR PRINCIPAL */}
                                <div className="ai-project-main">

                                  {/* IMAGEN */}
                                  <div className="ai-image-container">
                                    <ProjectCard {...project} />
                                  </div>

                                  {/* DESCRIPCIÓN */}
                                  <div className="ai-description-container">
                                    <span className="ai-category">{projectCategories.ai[0]}</span>

                                    <div className="ai-features-container">
                                      <h3 className="ai-title">{project.title}</h3>
                                      <ul>
                                        {project.features.map((feature, featureIndex) => (
                                          <li key={featureIndex}>
                                            <LuCpu className="ai-bullet-icon" /> {feature}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>

                                    {/* BOTÓN */}
                                    <div className="ai-actions-container">
                                      <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ai-btn secondary"
                                      >
                                        <FaGithub />
                                        {project.githubLink ? ' Ver Código' : ' Privado'}
                                      </a>

                                      {project.link && (
                                        <a
                                          href={project.link}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="ai-btn primary"
                                        >
                                          <FaChartLine />
                                          {project.link ? ' Echar un Vistazo' : ' Privado'}
                                        </a>
                                      )}
                                    </div>
                                    <br />

                                    {/* TECNOLOGÍAS */}
                                    <div className="ai-tech-container">
                                      <div className="ai-tech-tags-container">
                                        {project.technologies.map((tech, techIndex) => (
                                          <span key={techIndex} className="ai-tech-tag">
                                            {tech}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {index < aiProjects.length - 1 && <hr className="ai-divider" />}
                            </AIRevealItem>
                          ))}
                        </div>
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2} /> */}
    </section>
  );
};
