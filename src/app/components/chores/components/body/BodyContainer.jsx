import { BodyFechas } from './BodyFechas';

export const BodyContainer = ({ dataChores, setviewDetalles }) => {
  const urlTareas = `../../../../../public/img/ecommerce.png`;

  const tareas = JSON.parse(localStorage.getItem('tareas'));

  //NOS PERMITE CAMBIAR EL ESTADO DE VIEWDETALLES PARA PODER VER EL COMPONENTE DEL DETALLE DE LAS TAREAS
  const onViewDetalles = () => {
    setviewDetalles(true);
  };

  return (
    <>
      <div className='front-body__container'>
        <p className='front-body__container__titulo'>Listado de tareas</p>

        {tareas?.map((d) => (
          <div key={d.ide} onClick={onViewDetalles} className='front-body__container__contenido'>
            <div className='front-body__container__contenido__img'>
              <img
                className='front-body__container__contenido__img-img'
                src={urlTareas}
                alt='imagen'
              />
            </div>

            <div className='front-body__container__contenido__text'>
              <small className='front-body__container__contenido__text__small'>{d.curso}</small>
              <h1 className='front-body__container__contenido__text__titulo'>{d.tarea}</h1>
              <p className='front-body__container__contenido__text__contenido'>{d.contenido}</p>
              <BodyFechas {...d} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
