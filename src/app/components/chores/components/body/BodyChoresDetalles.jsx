import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteChores, editChores,completeChores } from "../../../../../store/chores/thunks";
import { getSearchViewForId } from "../../helper/getSearchViewForId";

export const BodyChoresDetalles = ({setviewDetalles,data,setview,setFormulario}) => {

  const urlTareas=`../../../../../public/img/ecommerce.png`;
  const {choresForm}=useSelector(state=>state.chores);
  const dispatch=useDispatch();
  const a=getSearchViewForId(data,choresForm);

 const handleDelete=()=>{

  dispatch(deleteChores(a._id));
  setviewDetalles(false);

 }

 const handleEdit=()=>{
  setview(true);
  setviewDetalles(false);
  dispatch(editChores(a._id));
  setFormulario('editar')

 }

 const handleComplete=()=>{
  console.log(a._id);
  console.log('completado');
  dispatch(completeChores(a._id));
  setviewDetalles(false);
 }

  return (
    <>
        <div className="body__detalles">

          <div  className="body__detalles__contenedor">

            <a onClick={()=>setviewDetalles(false)} className="body__detalles__contenedor__icono"><FaTimes/></a>

            <h1 className="body__detalles__contenedor__titulo">TAREAS DETALLLE</h1>

            <img className="body__detalles__contenedor__img" src={urlTareas} alt="imagen" />

            <div className="body__detalles__contenedor__principal">

              <div className="body__detalles__contenedor__principal__chores">
                <label className="body__detalles__contenedor__principal__chores__label" >TITULO: </label>
                <h1 className="body__detalles__contenedor__principal__chores__input">{a.title}</h1>
                <label className="body__detalles__contenedor__principal__chores__label" >DESCRIPCION:</label>
                <h1 className="body__detalles__contenedor__principal__chores__input">{a.description}</h1>
              </div>

              <div className="body__detalles__contenedor__principal__buttons">
                <button onClick={handleEdit}  className="body__detalles__contenedor__principal__buttons__editar">EDITAR TAREAS</button>
                <button onClick={handleDelete} className="body__detalles__contenedor__principal__buttons__eliminar">ELIMINAR</button>
                <button onClick={handleComplete}  className="body__detalles__contenedor__principal__buttons__completada">TAREA COMPLETADA</button>
              </div>

            </div>

          </div>

        </div>
    </>
  )
}
