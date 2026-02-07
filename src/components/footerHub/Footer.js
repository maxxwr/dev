import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NewsHubContainer } from "../connect/newsHubContainer";
import logo from "../../assets/img/elmo1.gif";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import "../../color/footerHub/Footer.css";

export const Footer = () => {
  const [hora, setHora] = useState(
    new Date().toLocaleTimeString("es-PE", { hour12: false })
  );
  const [fecha, setFecha] = useState(
    new Date().toLocaleDateString("es-PE", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const nuevaHora = new Date().toLocaleTimeString("es-PE", { hour12: false });
      const segundosPrev = hora.split(":")[2]?.substring(0, 2);
      const segundosNuevos = nuevaHora.split(":")[2]?.substring(0, 2);

      if (segundosPrev !== segundosNuevos) {
        const flipCards = document.querySelectorAll(".flip-card.seconds");
        flipCards.forEach((card) => {
          card.classList.add("flip");
          setTimeout(() => card.classList.remove("flip"), 700);
        });
      }

      setHora(nuevaHora);
      setFecha(
        new Date().toLocaleDateString("es-PE", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [hora]);

  const horaSplit = hora.split(":");
  const horaActual = parseInt(horaSplit[0], 10);
  const minutos = horaSplit[1];
  const segundos = horaSplit[2] ? horaSplit[2].substring(0, 2) : "";
  const horaFormateada = horaActual < 10 ? `${horaActual}` : `${horaActual}`;
  const ampm = new Date()
    .toLocaleTimeString("en-US", { hour12: true })
    .slice(-2);

  const redesSociales = [
    { href: "https://www.linkedin.com/in/max-winchez-rivera-3719a4237/", src: navIcon1, alt: "LinkedIn" },
    { href: "https://github.com/", src: navIcon3, alt: "GitHub" },
    { href: "https://www.facebook.com/wr.max.404270", src: navIcon2, alt: "Facebook" },
  ];

  const footerText = {
    rights: ["©", new Date().getFullYear(), "Max", "|", "Lima, Perú.", "Todos los derechos reservados."],
    date: [fecha]
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <NewsHubContainer />

          <Col size={12} sm={6} className="footer-logo-container text-center text-sm-start">
            <img src={logo} alt="Logo" className="footer-logo" />
          </Col>

          <Col size={12} sm={6} className="footer-right">
            <div className="social-icon">
              {redesSociales.map((red, i) => (
                <a key={i} href={red.href} target="_blank" rel="noopener noreferrer">
                  <img src={red.src} alt={red.alt} />
                </a>
              ))}
            </div>

            <div className="footer-time">
              {horaFormateada.split("").map((char, i) => (
                <div key={`hora-${i}`} className="time-box">{char}</div>
              ))}

              <div className="time-box">:</div>
              {minutos.split("").map((char, i) => (
                <div key={`min-${i}`} className="time-box minute-box">{char}</div>
              ))}

              <div className="time-box">:</div>
              {segundos.split("").map((char, i) => (
                <div key={i} className="flip-card seconds">
                  <div className="flip-upper">{char}</div>
                  <div className="flip-lower">{char}</div>
                </div>
              ))}

              {ampm.split("").map((char, i) => (
                <div key={`ampm-${i}`} className="time-box">{char}</div>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="footer-bottom-row">
          <Col sm={6} className="text-center text-sm-start">
            <p className="footer-date">{fecha}</p>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <p className="footer-rights">{footerText.rights.join(" ")}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};