import React from 'react'
import './SecctionA.css'
const SecctionB = () => {
  return (
    <div className='secction'>
   
    <div className='imagenCompleta'>
    <img src='../assets/tareas.jpg' alt='Reunion' />
    </div>
    <div className='cuerpo-articulo'>
    <h3>No dejes ningún cabo suelto</h3>
    <p>¿Quedaste de visitar a don felipe? guardalo como tarea y recibe recordatorios,
    Ningun compromiso con el elector se te olvidará gracias al modulo de Tareas.
    <p>El quipo de altamira debe visitar la familia Pérez, el lider lo asgina como tarea a su equipo y listo! </p>
    </p>
    <div className='botones'>
        <a className='btn dark' href='tel:+18092299444'>Contactar</a> <a  href='https://www.instagram.com/mielectorapp'  className='btn default'>Leer Más</a>
    </div>

    </div>
  </div>
  )
}

export default SecctionB