import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from '../../../../../hooks/useForm';
import { startChores } from "../../../../../store/chores/thunks";

const validate = (stateForm) => {
  const { titulo, descripcion } = stateForm;
  const errors = {};

  if (!titulo.trim()) {
    errors.titulo = "El titulo es requerido";
  }

  if (!descripcion.trim()) {
    errors.descripcion = "La descripcion es requerida";
  }

  return errors;
};

export const ChoresFormulario = ({setview}) => {

  
  const handleSumitChores=(data)=>{
    dispatch(startChores(data));
    setview(false);

};
    const {stateForm,handleInputChange,handleSubmit} =useForm({
            titulo:'',
            descripcion:'',
            completado:false,
        },validate,handleSumitChores);

    const {titulo,descripcion,completado}=stateForm;
    const {choresForm}=useSelector((state)=>state.chores);
    const dispatch=useDispatch();

    
  

  return (
    <>
        <div  className="container__tareas " id="container__tareas">
          <div className="container__tareas__form" id="form">
            <a onClick={()=>setview(false)} className="container__tareas__form__close"><FaTimes /></a>
            <h1 className="container__tareas__form__titulo">REGISTRAR TAREAS</h1>

            <form className="container__tareas__form__form" onSubmit={handleSubmit}>

              <input 
              className="container__tareas__form__form__input" 
              type="text" 
              placeholder="TITULO: " 
              name='titulo'
              value={titulo}
              onChange={handleInputChange}
              />

              <input 
              className="container__tareas__form__form__input" 
              type="text" 
              placeholder="DESCRIPCION: "
              name='descripcion'
              value={descripcion}
              onChange={handleInputChange}
              />
              <button className="container__tareas__form__form__button">Registrar tarea</button>

            </form>

          </div>
        </div>
    </>
  )
}
