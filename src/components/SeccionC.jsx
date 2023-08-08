import React from 'react'
import './SeccionC.css'
const SeccionC = () => {
  return (
    <div className='secction seccionC'>

    <div className='contenedorLista'>
<article>
    <div className='fotoListaArticulo'>
    <img src='../assets/manos.webp' alt='Reunion' />
    </div>
    <h4>Crea Encuestas</h4>
    <p>Crea Encuestas semanales, mensuales o trimestrales</p>
    <div className='botones'>
        <button className='btn dark'>Leer Más</button>
    </div>
</article>

<article>
    <div className='fotoListaArticulo'>
    <img src='../assets/manos.webp' alt='Reunion' />
    </div>
    <h4>Boca de urna</h4>
    <p>Obtenga resultados reales a boca de urna gracias a mi elector</p>
   
    <div className='botones'>
        <button className='btn dark'>Leer Más</button>
    </div>
</article>

<article>
    <div className='fotoListaArticulo'>
    <img src='../assets/manos.webp' alt='Reunion' />
    </div>
    <h4>Concurrencia</h4>
    <p>Planifique y controle sus mesas electorales, que nadie se quede sin votar.</p>
    <div className='botones'>
        <button className='btn dark'>Leer Más</button>
    </div>
</article>
    </div>
    </div>  
)
}

export default SeccionC