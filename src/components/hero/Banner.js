import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope, FaPhone, FaFileDownload, FaCheckCircle } from "react-icons/fa";
import { CertificatesModal } from "../Modal/CertificatesModal";
import headerImg from "../../assets/img/gatin.gif";
import "aos/dist/aos.css";
import AOS from "aos";
import "../../color/hero/Banner.css";
import { BackgroundAnimation } from "../fxHub/animation";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [showCertificates, setShowCertificates] = useState(false);

  const period = 2000;

  const toRotate = useMemo(
    () => [
      "Backend Developer",
      "Desarrollador Web",
      "Deep Learning / Machine Learning",
      "Bases de Datos",
      ".. y más",
    ],
    []
  );

  const infoPersonal = {
    name: "Max Winchez",
    email: "maxwinchez@gmail.com",
    phone: "+(51) 910 339 920",
    title: "Hola, soy Max Winchez",
    description: "Desarrollo backend, frontend e integración de soluciones con DL & ML.",
    phrase: "Transformando ideas en realidad",
    downloadTexts: {
      default: "Descargar CV",
      completed: "Descarga Completada",
    },
    socialText: "Follow Me",
    certificatesText: "Ver Logros",
  };

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, text, toRotate]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [tick, delta]);

  useEffect(() => {
    AOS.init({ duration: 1200 });

    const createBubble = (event) => {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble", "bubble-active");
      document.body.appendChild(bubble);
      const size = Math.random() * 50 + 30;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${event.pageX - size / 2}px`;
      bubble.style.top = `${event.pageY - size / 2}px`;
      setTimeout(() => bubble.remove(), 2000);
    };

    document.body.addEventListener("mousemove", createBubble);
    return () => {
      document.body.removeEventListener("mousemove", createBubble);
    };
  }, []);

  const handleDownloadClick = (link) => {
    setIsDownloading(true);
    let progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev === 100) {
          clearInterval(progressInterval);
          setIsDownloading(false);
          setDownloadComplete(true);
          window.location.href = link;
          setTimeout(() => {
            setDownloadComplete(false);
          }, 2000);
          return prev;
        }
        return prev + 10;
      });
    }, 300);
  };

  const redesSociales = [
    { href: "https://www.linkedin.com/in/max-winchez-rivera-3719a4237/", icon: <FaLinkedin />, alt: "LinkedIn" },
    { href: "https://github.com/", icon: <FaGithub />, alt: "GitHub" },
    { href: "https://www.facebook.com/wr.max.404270", icon: <FaFacebook />, alt: "Facebook" },
  ];

  return (
    <section id="home" className="banner-section">
      <BackgroundAnimation />
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="banner-img-container">
            <div data-aos="zoom-in" className="profile-img-wrapper">
              <img src={headerImg} alt="Imagen de perfil" className="profile-img" />
            </div>
            <div className="contact-info">
              <p>
                <FaEnvelope className="icon" /> {infoPersonal.email}
              </p>
              <p>
                <FaPhone className="icon" /> {infoPersonal.phone}
              </p>

              <button
                className="vvd btn-contact"
                onClick={() =>
                  handleDownloadClick("https://drive.google.com/uc?export=download&id=1Xab_e2jyyZNUWWjUfvEOHVzK-hY6xbfr")
                }
              >
                {isDownloading ? (
                  <>
                    <span className="loading-text">{progress}%</span>
                    <div className="loading-bar" style={{ width: `${progress}%` }}></div>
                  </>
                ) : downloadComplete ? (
                  <>
                    <FaCheckCircle style={{ marginRight: "10px", color: "green" }} />
                    <span>{infoPersonal.downloadTexts.completed}</span>
                  </>
                ) : (
                  <>
                    <FaFileDownload style={{ marginRight: "10px" }} /> {infoPersonal.downloadTexts.default}
                  </>
                )}
              </button>
            </div>
          </Col>

          <Col xs={12} md={6} className="text-container">
            <div data-aos="fade-right">
              <br />
              <h2 className="banner-title">{infoPersonal.title}</h2>
              <h2 className="highlight-text">{text}</h2>
              <p className="description">{infoPersonal.description}</p>
              <div className="projects-container">
                <div className="projects-info">{infoPersonal.phrase}</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="social-links">
        <div className="follow-text">{infoPersonal.socialText}</div>
        <div className="social-icons">
          {redesSociales.map((red, index) => (
            <a key={index} href={red.href} target="_blank" rel="noreferrer" className="social-icon" aria-label={red.alt}>
              {red.icon}
            </a>
          ))}
        </div>

        <div className="social-icon">
          <Button variant="link" onClick={() => setShowCertificates(true)} className="btn-logros">
            {infoPersonal.certificatesText}
          </Button>
        </div>
      </div>

      {/*modal separaado */}
      <CertificatesModal show={showCertificates} onHide={() => setShowCertificates(false)} />
    </section>
  );
};
