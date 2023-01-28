import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from '../../../../../hooks/useForm';
import { editChores, startChores } from "../../../../../store/chores/thunks";
import { getSearchViewForId } from "../../helper/getSearchViewForId";

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

export const ChoresFormulario = ({setview,Formulario,data}) => {
  const {choresForm}=useSelector((state)=>state.chores);
  const a=getSearchViewForId(data,choresForm);
      const handleSumitChores=(dataa)=>{
        if (Formulario==='crear') {
          dispatch(startChores(dataa));
          setview(false);
        }else{
          dispatch(editChores(data,dataa));
          setview(false);
        }
    };
    
    const initial=()=>{
      if (Formulario==='crear') {
        return{
          titulo:'',
          descripcion:'',
          completado:false,
        }
      }else{
        return{
          titulo:a?.titulo,
          descripcion: a?.descripcion,
          completado:a?.completado,
        }
      }
    }

    const {stateForm,handleInputChange,handleSubmit} =useForm(initial,validate,handleSumitChores);

    const {titulo,descripcion,completado}=stateForm;
    
    const dispatch=useDispatch();

    //Llamada de formulario para crear o editar
    const tipoFormulario=()=>{
      if (Formulario==='crear') {
        return 'REGISTRAR';
      }else{
        return 'EDITAR';
      }
    }
    

  return (
    <>
        <div  className="container__tareas " id="container__tareas">
          <div className="container__tareas__form" id="form">
            <a onClick={()=>setview(false)} className="container__tareas__form__close"><FaTimes /></a>
            <h1 className="container__tareas__form__titulo">{tipoFormulario()} TAREAS</h1>

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
              <button className="container__tareas__form__form__button">{tipoFormulario()} TAREAS</button>

            </form>

          </div>
        </div>
    </>
  )
}
