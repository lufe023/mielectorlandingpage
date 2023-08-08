import React from 'react'
import './SecctionD.css'
const SecctionD = () => {
  return (
    <div className='secction secctionD'>
        <h2 className='feactures'>Caracteristicas</h2>
        <div className="columnas">
        <div className="col">
            <article>
            <h4>Powerful GPS tracking</h4>
            <p>Plan and monitor your polling stations seamlessly.</p>
            </article>

            <article>
            <h4>Real-Time Surveys</h4>
            <p>Stay informed with live survey data analysis.</p>
            </article>
        </div>
        
        <div className="col">
            <article>
            <h4>Accessible Solutions</h4>
            <p>Empower individuals with disabilities to participate.</p>
            </article>

            <article>
            <h4>Unified Communication</h4>
            <p>Manage your teams and voters with ease.</p>
            </article>
        </div>

        <div className="col">
            <article>
            <h4>Community Leadership</h4>
            <p>Equip community leaders to inspire others.</p>
            </article>

            <article>
            <h4>Election Security</h4>
            <p>Ensure fair and safe elections for all.</p>
            </article>
        </div>


        </div>

    </div>
  )
}

export default SecctionD