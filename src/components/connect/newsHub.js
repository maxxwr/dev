import React, { useState } from 'react';
import { Col, Row, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import "../../color/connect/newsHub.css";

export const NewsHub = () => {
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');

  const newsHubText = {
    heading: [
      "¡Conecta conmigo!",
      "Recibe actualizaciones o contáctame directamente"
    ]
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && (email.indexOf('@') === -1 || email === '')) {
      setStatus('error');
      setMessage('Por favor, introduce un correo válido.');
      return;
    }

    if (telefono && !/^\d{9}$/.test(telefono)) {
      setStatus('error');
      setMessage(`¡Casi! Tu celular tiene ${telefono.length} dígitos. Necesita exactamente 9 dígitos sin espacios. 😊`);
      return;
    }

    const data = {};
    if (email) data.email = email;
    if (telefono) data.telefono = telefono;

    if (email || telefono) {
      setStatus('sending');
      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID_NEWSHUB,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID_NEWSHUB,
          data,
          process.env.REACT_APP_EMAILJS_USER_ID_NEWSHUB
        )
        .then(
          (response) => {
            if (email && telefono) {
              setStatus('success');
              setMessage(`¡Tu correo y tu número de celular se enviaron con éxito! 😊`);
            } else if (email) {
              setStatus('success');
              setMessage(`¡Tu correo electrónico se envió con éxito! 😊`);
            } else if (telefono) {
              setStatus('success');
              setMessage(`¡Tu número de celular se envió con éxito! 😊`);
            }
            setEmail('');
            setTelefono('');
            console.log("Correo y celular enviado correctamente:", response);
          },
          (err) => {
            setStatus('error');
            setMessage('Hubo un error al enviar el correo. Inténtalo más tarde. 😞');
            console.error("Error al enviar el correo:", err);
          }
        );
    } else {
      setStatus('error');
      setMessage('¡Ups! Parece que olvidaste ingresar un correo o un número de celular. 😅');
    }
  };

  const statusText = {
    sending: ["Enviando..."]
  };

  const buttonText = {
    submit: ["Enviar"],
  };

  return (
    <Col lg={12}>
      <div className="newshub-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              {newsHubText.heading[0]}<br />
              {newsHubText.heading[1]}
            </h3>
            {status === 'sending' && <Alert>{statusText.sending.join(" ")}</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                />
                <input
                  value={telefono}
                  type="tel"
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="Tu celular"
                />
                <button type="submit">{buttonText.submit.join(" ")}</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
