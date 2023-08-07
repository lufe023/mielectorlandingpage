import React from 'react'
import './SeccionC.css'
const SeccionC = () => {
  return (
    <div className='secction'>

    <div className='contenedorLista'>
<article>
    <div className='fotoListaArticulo'>
    <img src='../assets/manos.webp' alt='Reunion' />
    </div>
    <h4>Scaling Your Site</h4>
    <p>Learn about hosting built for scale and reliability.</p>
    <div className='botones'>
        <button className='btn dark'>Leer Más</button>
    </div>
</article>

<article>
    <div className='fotoListaArticulo'>
    <img src='../assets/manos.webp' alt='Reunion' />
    </div>
    <h4>Titulo</h4>
    <p>Cuerpo</p>
    <div className='botones'>
        <button className='btn dark'>Leer Más</button>
    </div>
</article>

<article>
    <div className='fotoListaArticulo'>
    <img src='../assets/manos.webp' alt='Reunion' />
    </div>
    <h4>Titulo</h4>
    <p>Cuerpo</p>
    <div className='botones'>
        <button className='btn dark'>Leer Más</button>
    </div>
</article>
    </div>
    </div>  

  )
}

export default SeccionC