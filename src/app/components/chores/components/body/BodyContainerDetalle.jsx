
export const BodyContainerDetalle = ({_id,setviewDetalles,title,description,setdata}) => {

const urlTareas=`/img/ecommerce.png`;

//NOS PERMITE CAMBIAR EL ESTADO DE VIEWDETALLES PARA PODER VER EL COMPONENTE DEL DETALLE DE LAS TAREAS
const onViewDetalles=()=>{
    
    setviewDetalles(true);
    setdata(_id)

}

const textoCortado=description.substr(0,30);

  return (
    <>
        <div onClick={onViewDetalles} className="front-body__container__contenido">

            <div  className="front-body__container__contenido__img">
                <img className="front-body__container__contenido__img-img" src={urlTareas} alt="imagen" />
            </div>

            <div className="front-body__container__contenido__text">
                <small className="front-body__container__contenido__text__small">{title}</small>
                <p className="front-body__container__contenido__text__contenido">{textoCortado}</p>
            </div>   

        </div>
    </>
  )
}
