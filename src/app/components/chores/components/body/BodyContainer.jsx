import { useSelector } from "react-redux";
import { BodyContainerDetalle } from "./BodyContainerDetalle";

export const BodyContainer = ({setviewDetalles,setdata}) => {
  
  const {choresForm}=useSelector((state)=>state.chores);

  return (
    <>
        
        <div className="front-body__container">

              <p className="front-body__container__titulo">Listado de tareas</p>

                {
                  choresForm?.map((d)=>(

                    <BodyContainerDetalle key={d._id} {...d} setdata={setdata} setviewDetalles={setviewDetalles} />

                  ))
                }

        </div>
    </>
  );
};
