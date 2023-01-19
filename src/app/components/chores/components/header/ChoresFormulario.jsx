import { FaTimes } from "react-icons/fa";
import { useForm } from '../../../../../hooks/useForm';


export const ChoresFormulario = ({setview,setdataChores,dataChores}) => {
        const {stateForm,handleInputChange,handleSubmit} =useForm({
            ide:'',
            curso:'',
            tarea:'',
            contenido:'',
            fechaInicio:'',
            fechaFin:'',
            fechaCreacion:'',
        });

    const {ide,curso,tarea,contenido,fechaInicio,fechaFin ,fechaCreacion}=stateForm;


    const handleSumitChores=(e)=>{
        e.preventDefault();
        //CON ESTE HANDLE ENVIAREMOS LOS DATOS DEL FORMULARIO A DATACHORES EN EL COMPONENTE DE CHORES
        const tareas=[...dataChores,{
          ide: crypto.randomUUID(),
          curso:curso,
          tarea:tarea,
          contenido:contenido,
          fechaInicio:fechaInicio,
          fechaFin:fechaFin,
          fechaCreacion:Date.now(),
          
        }]

        setdataChores(tareas);
        setview(false);

        localStorage.setItem('tareas',JSON.stringify(tareas));
    };

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
              <input 
              className="container__tareas__form__form__input" 
              type="date"
              name='fechaInicio'
              value={fechaInicio}
              onChange={handleInputChange}
              />

              <label className="container__tareas__form__form__label" htmlFor="">Fecha de fin:</label>
              <input 
              className="container__tareas__form__form__input" 
              type="date"
              name='fechaFin'
              value={fechaFin}
              onChange={handleInputChange}
              />

              <button className="container__tareas__form__form__button">Registrar tarea</button>
              
            </form>

          </div>
        </div>
    </>
  )
}
