import React from 'react'
import './SecctionD.css'
const SecctionD = () => {
  return (
    <div className='secction secctionD'>
        <h2 className='feactures'>Caracteristicas</h2>
        
        <div className="columnas">
        <div className="col">
            <article>
            <h4>Potente seguimiento GPS</h4>
            <p>Planifique y controle sus mesas electorales sin problemas.</p>
            </article>

            <article>
            <h4>Boca de urnaen tiempo real</h4>
            <p>Manténgase informado con el análisis de datos de encuestas en vivo en boca de urna.</p>
            </article>
        </div>
        
        <div className="col">
            <article>
            <h4>Soluciones Accesibles</h4>
            <p>La Herramienta está diseñada para que cualquiera pueda usarla</p>
            </article>

            <article>
            <h4>Comunicaciones unificadas</h4>
            <p>Administre sus equipos y votantes con facilidad.</p>
            </article>
        </div>

        <div className="col">
            <article>
            <h4>Empodere el Liderazgo Comunitario</h4>
            <p>Equipe a los líderes de la comunidad para inspirar a otros.</p>
            </article>

            <article>
            <h4>Seguridad Electoral</h4>
            <p>Garantizar elecciones justas y seguras para todos.</p>
            </article>
        </div>

        </div>
    
    </div>
  )
}

export default SecctionD