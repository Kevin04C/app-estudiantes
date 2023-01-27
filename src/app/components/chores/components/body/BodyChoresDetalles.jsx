import { FaTimes } from "react-icons/fa";

export const BodyChoresDetalles = ({setviewDetalles}) => {

  const urlTareas=`../../../../../public/img/ecommerce.png`;

  return (
    <>
        <div className="body__detalles">

          <div className="body__detalles__contenedor">

            <a onClick={()=>setviewDetalles(false)} className="body__detalles__contenedor__icono"><FaTimes/></a>

            <h1 className="body__detalles__contenedor__titulo">TAREAS DETALLLE</h1>

            <img className="body__detalles__contenedor__img" src={urlTareas} alt="imagen" />

            <div className="body__detalles__contenedor__principal">

              <div className="body__detalles__contenedor__principal__chores">
                <label className="body__detalles__contenedor__principal__chores__label" >CURSO: </label>
                <h1 className="body__detalles__contenedor__principal__chores__input">programa</h1>
                <label className="body__detalles__contenedor__principal__chores__label" >TAREA:</label>
                <h1 className="body__detalles__contenedor__principal__chores__input">dadasdasdasdas</h1>
                <label className="body__detalles__contenedor__principal__chores__label" >CONTENIDO: </label>
                <h1 className="body__detalles__contenedor__principal__chores__input">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam distinctio, ullam id quo nihil perspiciatis sint non eveniet aperiam mollitia ipsum quasi! Omnis repellat ipsum rerum laboriosam, dolor ut doloremque modi. Earum consectetur velit repudiandae ex adipisci, eos molestias.</h1>
                <label  className="body__detalles__contenedor__principal__chores__label">FECHA DE INICIO: </label>
                <h1 className="body__detalles__contenedor__principal__chores__input">hace 1 segundo</h1>
                <label className="body__detalles__contenedor__principal__chores__label" >FECHA DE FIN: </label>
                <h1 className="body__detalles__contenedor__principal__chores__input">hace 1 segundo</h1>
                <label className="body__detalles__contenedor__principal__chores__label" >FECHA DE CREACION: </label>
                <h1 className="body__detalles__contenedor__principal__chores__input">hace 1 segundo</h1>
              </div>

              <div className="body__detalles__contenedor__principal__buttons">
                <button className="body__detalles__contenedor__principal__buttons__editar">EDITAR TAREAS</button>
                <button className="body__detalles__contenedor__principal__buttons__eliminar">ELIMINAR</button>
                <button className="body__detalles__contenedor__principal__buttons__completada">TAREA COMPLETADA</button>
              </div>

            </div>

          </div>

        </div>
    </>
  )
}
