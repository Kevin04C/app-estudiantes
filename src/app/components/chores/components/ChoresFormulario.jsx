import React from 'react'
import { useForm } from '../../../../hooks/useForm';
import { FaTimes } from "react-icons/fa";


export const ChoresFormulario = ({setview,setdataChores,dataChores}) => {
        const {stateForm,handleInputChange,handleSubmit} =useForm({
            curso:'',
            tarea:'',
            contenido:'',
        });

    const {curso,tarea,contenido}=stateForm;


    const handleSumitChores=(e)=>{
        e.preventDefault();
        setdataChores([...dataChores,{
            curso:curso,
            tarea:tarea,
            contenido:contenido,
        }])
        setview(false);
    }

  return (
    <>
        <div  className="container__tareas " id="container__tareas">
          <div className="container__tareas__form" id="form">
            <a onClick={()=>setview(false)} className="container__tareas__form__close"><FaTimes /></a>
            <h1 className="container__tareas__form__titulo">REGISTRAR TAREAS</h1>
            <form className="container__tareas__form__form" onSubmit={handleSumitChores}>
              <input 
              className="container__tareas__form__form__input" 
              type="text" 
              placeholder="CURSO:" 
              name='curso'
              value={curso}
              onChange={handleInputChange}
              />
              <input 
              className="container__tareas__form__form__input" 
              type="text" 
              placeholder="TAREA"
              name='tarea'
              value={tarea}
              onChange={handleInputChange}
              />
              <input 
              className="container__tareas__form__form__input" 
              type="text" 
              placeholder="CONTENIDO:" 
              name='contenido'
              value={contenido}
              onChange={handleInputChange}
              />
              <label className="container__tareas__form__form__label" htmlFor="">Fecha de inicio:</label>
              <input className="container__tareas__form__form__input" type="date"/>
              <label className="container__tareas__form__form__label" htmlFor="">Fecha de fin:</label>
              <input className="container__tareas__form__form__input" type="date"/>
              <button className="container__tareas__form__form__button">Registrar tarea</button>
            </form>
          </div>
        </div>
    </>
  )
}
