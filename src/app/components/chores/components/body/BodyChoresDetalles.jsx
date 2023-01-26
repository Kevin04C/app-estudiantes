import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { completeChores } from "../../../../../store/chores/choresSlice";
import { deleteChores } from "../../../../../store/chores/thunks";
import { getSearchViewForId } from "../../helper/getSearchViewForId";

export const BodyChoresDetalles = ({setviewDetalles,data,setview}) => {

  const urlTareas=`../../../../../public/img/ecommerce.png`;
  const {choresForm}=useSelector(state=>state.chores);
  const dispatch=useDispatch();
  const a=getSearchViewForId(data,choresForm);

 const handleDelete=()=>{

  dispatch(deleteChores(a._id));
  setviewDetalles(false);

 }

 const handleEdit=()=>{

  console.log('editando');
  console.log(a.ide);
  setview(true);
  setviewDetalles(false);

 }

 const handleComplete=()=>{

  console.log('completado');
  console.log(a.ide);
  dispatch(completeChores(a.ide));
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
                <h1 className="body__detalles__contenedor__principal__chores__input">{a.titulo}</h1>
                <label className="body__detalles__contenedor__principal__chores__label" >DESCRIPCION:</label>
                <h1 className="body__detalles__contenedor__principal__chores__input">{a.descripcion}</h1>
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
