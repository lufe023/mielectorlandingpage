import React from 'react'
import './SecctionA.css'
const SecctionA = () => {
  return (
    <>
    <div className='secction'>
    <div className='cuerpo-articulo'>
    <h3>EL manejo de los equipos nunca fue tan fácil</h3>
    <p>El modulo teams te permite tener todos tus equipos sectoriales organizados y conectados.
    </p>

    <div className='botones'>
        <a className='btn dark' href='tel:+1849-471-8594'>Contactar</a>
        <button className='btn default'>Leer Más</button>
    </div>

    </div>
    <div className='imagenCompleta'>
    <img src='../assets/reunion2.webp' alt='Reunion' />
    </div>
  </div>
  <div className='secction'>
    <div className='miniArt'>
    <div className='miniFoto'>
        <img src='../assets/centro de computo.webp' alt='Reunion' /> 
    </div>
    <div className='miniCuerpo'>
    <h3>Mide a cada uno</h3>
    <p>El modulo Teams, te permite medir a cada uno de los integrantes, dar un seguimiento adecuado y saber que están haciendo.</p>
    <div className='botones'>
        <a className='btn dark' href='tel:+1849-471-8594'>Contactar</a> <button className='btn default'>Leer Más</button>
    </div>
    </div>

   </div>

   <div className='miniArt'>
    <div className='miniFoto'>
        <img src='../assets/centro de computo.webp' alt='Reunion' /> 
    </div>
    <div className='miniCuerpo'>
    <h3>Fortalece</h3>
    <p>Con el modulo Teams podras medir mas de cerca el resultado de cada equipo y de cada quien en el equipo</p>
    <div className='botones'>
        <a className='btn dark' href='tel:+1849-471-8594'>Contactar</a> <button className='btn default'>Leer Más</button>
    </div>
    </div>

   </div>
  </div>
  </>
  )
}

export default SecctionA