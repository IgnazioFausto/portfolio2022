import React from 'react'
import work_huertita from '../../../../img/Mi Huertapp.gif'
import work_tekno from '../../../../img/gif teknotech.gif'

function Works() {
  return (
    <div className="contenedor">
        <h3 className="title">Works</h3>
        <p className="paragraph">Los proyectos/trabajos que realice:</p>
        <div className="contenedor">
            <div className="contenedor-works">
                <div className="contenedor-works-img">
                    <img src={work_huertita} className='work-img' />
                    <img src={work_tekno} className='work-img' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Works