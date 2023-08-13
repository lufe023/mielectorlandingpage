import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
     <h1>Construye Campañas Exitosas</h1>
     <div className='advertisiment'>
      <a href='mailto:lufe023@gmail.com'> enviar correo </a> 
      | <a href='tel:+1849-471-8594'>Llamar </a> 
      | <a aria-label="Chatear en WhatsApp" href="https://wa.me/18494718594">
       Whatsapp</a></div>
       <h4 className='advertisiment'>llamanos ahora y consigue una demostración gratis</h4>
    </footer>
  );
};

export default Footer;
