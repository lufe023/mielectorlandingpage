import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
     <h1>Construye Campañas Exitosas</h1>
     <div className='advertisiment'>
      <a href='mailto:lufe023@gmail.com'> enviar correo </a> 
      | <a href='tel:+1849-471-8594'>Llamar </a> 
      | <a aria-label="Chat on WhatsApp" href="https://wa.me/18494718594">
       Whatsapp</a></div>
    </footer>
  );
};

export default Footer;
