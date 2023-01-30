import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from '../../../../../hooks/useForm';
import { editChores, startChores } from "../../../../../store/chores/thunks";
import { getSearchViewForId } from "../../helper/getSearchViewForId";


const validate = (stateForm) => {

  const { title, description } = stateForm;

  const errors = {};

  if (!title.trim()) {
    errors.title = "El titulo es requerido";
  }

  if (!description.trim()) {
    errors.description = "La descripcion es requerida";
  }

  return errors;
};



export const ChoresFormulario = ({setview,Formulario,data}) => {

  const {choresForm}=useSelector((state)=>state.chores);
  const a = getSearchViewForId(data,choresForm);

  //funcion submit que se evalua dependiendo de la condicion 'Crear' o 'Editar'
  const handleSumitChores=(dataa)=>{

        if (Formulario === 'crear') {
          dispatch(startChores(dataa));
          setview(false);
        }else{
          dispatch(editChores(data,dataa));
          setview(false);
        }

  };
  
  //funcion que me permite evaluar si es para crear o editar, me retornara un objeto dependiendo de la condicion
  const initial=()=>{

      if (Formulario === 'crear') {
        return{
          title:'',
          description:''
        }
      }else{
        return{
          title:a?.title,
          description: a?.description,
          completed:a?.completed,
        }
      }

  }

  const {stateForm,handleInputChange,handleSubmit} = useForm(initial,validate,handleSumitChores);

  const {title,description} = stateForm;
    
  const dispatch=useDispatch();

  //Llamada de formulario para crear o editar
  const tipoFormulario=()=>{

      if (Formulario === 'crear') {
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
              name='title'
              value={title}
              onChange={handleInputChange}
              />

              <input 
              className="container__tareas__form__form__input" 
              type="text" 
              placeholder="DESCRIPCION: "
              name='description'
              value={description}
              onChange={handleInputChange}
              />

              <button className="container__tareas__form__form__button">{tipoFormulario()} TAREAS</button>

            </form>

          </div>

        </div>
    </>
  )
}
