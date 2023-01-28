import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

export const BodyChoresCompleteDetail = ({titulo,descripcion}) => {

  return (

    <div className="front-body__workFinished__componente">

            <div className="front-body__workFinished__componente__circulo"></div>

            <div className="front-body__workFinished__componente__tarea">
                <p className="front-body__workFinished__componente__tarea__asignatura">{titulo}</p>
                <p className="front-body__workFinished__componente__tarea__fecha">{descripcion}</p>
            </div>

            <div className="front-body__workFinished__componente__icono">

            <FaAngleRight/>
            
            </div>

    </div>
  )
}
