import React from 'react';
import './MainSection.css';

const MainSection = () => {

  return (
    <section className="secciont-first-view">
      <div className="content">
      <div className='columna1'>
        <svg viewBox="0 0 220 220" fill="none"><path d="M97.4025 46.0608C98.9783 42.384 102.594 40 106.594 40H164.835C172.014 40 176.854 47.3405 174.026 53.9392L122.597 173.939C121.022 177.616 117.406 180 113.406 180H55.1654C47.9862 180 43.1459 172.659 45.9739 166.061L97.4025 46.0608Z" fill="rgb(242, 149, 89)"></path></svg>
        </div>
        <div className='columna2'>
        <h1 className='title'><span>Mi</span>elector</h1>
        <div className='frase'>El aliado de mi campaña</div>
        <div>

          <form  action="https://formspree.io/f/xrgwpbnd" method="POST">
            <input className='callme callme-input' type='text' placeholder='Pon tu numero y te llamamos' name="telephone"/>
            <button className='callme callme-button' type="submit">Enviar</button>
          </form>
        </div>
        </div>
        
        <div className='columna3'>
        <svg viewBox="0 0 220 220" fill="none"><path d="M101.34 65C105.189 58.3333 114.811 58.3333 118.66 65L170.622 155C174.471 161.667 169.66 170 161.962 170H58.0385C50.3405 170 45.5292 161.667 49.3782 155L101.34 65Z" fill="rgb(184, 176, 141)"></path></svg>
        </div>

      </div>
 
  
    </section>
  );
};

export default MainSection;
