import { useState } from "react";
import { Body, Header } from "./components";


export const Chores=()=> {

  const [view, setview] = useState(false);
   


  return (
    <>
      <div className="container">
        <Header setview={setview} />
        <Body/>
        {
          view && (<div  className="container__tareas " id="container__tareas">
          <div className="container__tareas__form" id="form">
            <a onClick={()=>setview(false)} className="container__tareas__form__close"><i>cerrar</i></a>
            <h1 className="container__tareas__form__titulo">REGISTRAR TAREAS</h1>
            <form className="container__tareas__form__form" action="">
              <input className="container__tareas__form__form__input" type="text" placeholder="CURSO:" />
              <input className="container__tareas__form__form__input" type="text" placeholder="TAREA"/>
              <input className="container__tareas__form__form__input" type="text" placeholder="CONTENIDO:" />
              <label className="container__tareas__form__form__label" htmlFor="">Fecha de inicio:</label>
              <input className="container__tareas__form__form__input" type="date"/>
              <label className="container__tareas__form__form__label" htmlFor="">Fecha de fin:</label>
              <input className="container__tareas__form__form__input" type="date"/>
              <button className="container__tareas__form__form__button">Registrar tarea</button>
            </form>
          </div>
        </div>)
        }
      </div>
    </>
  );
};