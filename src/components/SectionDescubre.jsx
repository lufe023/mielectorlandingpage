import React from 'react';
import './SectionDescubre.css';

const SectionDescubre = () => {
  return (
    <div className='secctionB'>
      <h2 className='titulo-tipo-b'>
        Descubre MiElector
      </h2>
      <div className="contenedorGaleria">

 
      <div className='galeria'>
        <div className='imagen-galeria'>
          <img src='/src/assets/imgen gps.webp' alt='Imagen 1' />
          <div className='texto-superpuesto'>
            <h3>Encuentra a cualquiera</h3>
            <p>
                Puedes encontrar persona usando el gps, o el censor de proximidad
                </p>
                <button className='mas'>Saber más</button>
          </div>
        </div>
        <div className='imagen-galeria'>
          <img src='/src/assets/jovenes caminando.webp' alt='Imagen 2' />
          <div className='texto-superpuesto'>
            <h3>¿Seguro que son tuyos?</h3>
            <p>Asegura la participación de la gente en tus actividades.</p>
            <button className='mas'>Saber más</button>
          </div>
        </div>
        <div className='imagen-galeria'>
          <img src='/src/assets/discurso.webp' alt='Imagen 3' />
          <div className='texto-superpuesto'>
            <h3>Orquesta tu equipo</h3>
            <p>100% de equipo organizado, todos a la victoria.</p>
            <button className='mas'>Saber más</button>
          </div>
        </div>
        <div className='imagen-galeria'>
          <img src='/src/assets/0z1MxTwvwuRpMqMlyAGq2HGKQX4.webp' alt='Imagen 4' />
          <div className='texto-superpuesto'>
            <h3>Las Mediciones son importantes</h3>
            <p>Obten estadística, semanales, mensuales o trimestrales </p>
            <button className='mas'>Saber más</button>
          </div>
        </div>
        <div className='imagen-galeria'>
          <img src='/src/assets/JvU6mZ4YPVMW5y1SXidACblZ5Wo.webp' alt='Imagen 5' />
          <div className='texto-superpuesto'>
            <h3>¿Alguien necesita transporte?</h3>
            <p>Ten un reporte completo de cuantas personas necesitan ayuda para ir a votar</p>
            <button className='mas'>Saber más</button>
          </div>
        </div>
        <div className='imagen-galeria'>
          <img src='/src/assets/hirUh0JklDDJkavlroxsGh4FUo.webp' alt='Imagen 6' />
          <div className='texto-superpuesto'>
            <h3>Aquí no adivinamos</h3>
            <p>Todo lo que se nececita consolidado y administrado desde tu propio centro de computo</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SectionDescubre;
