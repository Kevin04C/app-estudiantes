import React from 'react';


export const BodyContainer = ({dataChores}) => {

  const urlTareas=`../../../../../public/img/ecommerce.png`;



  return (
    <>
        
        <div className="front-body__container">
              <p className="front-body__container__titulo">Listado de tareas</p>
                {
                  dataChores.map((d)=>(
                    <div key={d.curso} className="front-body__container__contenido">
                        <div className="front-body__container__contenido__img">
                          <img className="front-body__container__contenido__img-img" src={urlTareas} alt="imagen" />
                        </div>
                        <div className="front-body__container__contenido__text">
                          <small className="front-body__container__contenido__text__small">{d.curso}</small>
                          <h1 className="front-body__container__contenido__text__titulo">{d.tarea}</h1>
                          <p className="front-body__container__contenido__text__contenido">{d.contenido}</p>
                        </div>   
                      </div>
                  ))
                }
          </div>
    </>
  );
};
