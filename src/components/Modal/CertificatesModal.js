import React, { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { FaFileDownload, FaCheckCircle } from "react-icons/fa";
import projImg1 from "../../assets/img/cv1.jpg";
import projImg2 from "../../assets/img/cv2.jpg";
import projImg3 from "../../assets/img/cv3.jpg";
import projImg4 from "../../assets/img/cv4.jpg";

export const CertificatesModal = ({ show, onHide }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  const modalText = {
    close: ["Cerrar"],
    download: ["Descargar"],
    downloadComplete: ["Descarga Completada"],
    next: ["Siguiente"],
    prev: ["Anterior"],
  };

  const certificados = [
    { imgUrl: projImg2, link: "https://drive.google.com/uc?export=download&id=1hHLLjzBGhpmZz75Yw71SzAXpZ1k4Qaj_" },
    { imgUrl: projImg4, link: "https://drive.google.com/uc?export=download&id=15mZpyr-wWbWIg1-webTs11uVMQUAod1X" },
    { imgUrl: projImg1, link: "https://drive.google.com/uc?export=download&id=12_JWoJfyEom5j5_B7lpSxg6vSsDiIbxr" },
    { imgUrl: projImg3, link: "https://drive.google.com/uc?export=download&id=1q6cmKXOZY9Qsf0rELl7tPX1I6C5igNF4" },
  ];

  const imagesPerPage = 1;
  const maxPage = Math.ceil(certificados.length / imagesPerPage) - 1;

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

  const currentImages = certificados.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered className="certificates-modal">
      <Modal.Header>
        <Button variant="danger" onClick={onHide} className="close-button">
          {modalText.close.join(" ")}
        </Button>
      </Modal.Header>

      <Modal.Body>
        <Row>
          {currentImages.map((certificado, index) => (
            <Col key={index} className="d-flex justify-content-center mb-4">
              <div className="certificado-card">
                <img src={certificado.imgUrl} alt={`Certificado ${index + 1}`} className="certificado-img" />
              </div>
            </Col>
          ))}
        </Row>

        <div className="d-flex justify-content-center mt-3">
          {currentImages.map((certificado, index) => (
            <button
              onClick={() => handleDownloadClick(certificado.link)}
              key={index}
              className="d-flex justify-content-center mt-3 btn-descargar"
            >
              {isDownloading ? (
                <>
                  <span className="loading-text">{progress}%</span>
                  <div className="loading-bar" style={{ width: `${progress}%` }}></div>
                </>
              ) : downloadComplete ? (
                <>
                  <FaCheckCircle style={{ marginRight: "10px", color: "green" }} />
                  <span>{modalText.downloadComplete.join(" ")}</span>
                </>
              ) : (
                <>
                  <FaFileDownload style={{ marginRight: "10px" }} /> {modalText.download.join(" ")}
                </>
              )}
            </button>
          ))}
        </div>
      </Modal.Body>

      <Modal.Footer>
        <div className="pagination-controls">
          <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0} className="pagination-button prev">
            {modalText.prev.join(" ")}
          </Button>

          {[...Array(maxPage + 1)].map((_, index) => (
            <Button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`page-number ${currentPage === index ? "active" : ""}`}
            >
              {index + 1}
            </Button>
          ))}

          <Button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === maxPage} className="pagination-button next">
            {modalText.next.join(" ")}
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};


