import { BodyContainer } from "./BodyContainer";
import { BodyChoresComplete } from "./BodyChoresComplete";

export const Body = ({setviewDetalles ,setdata}) => {

  return (
    <>
        <div className="front-body">

          <BodyContainer setdata={setdata} setviewDetalles={setviewDetalles}/>

          <div className="front-body__workFinished">

              <p className="front-body__workFinished__titulo">Tareas Terminadas</p>

              {/* COMPONENTES DE LAS TAREAS FINALIZADAS */}
              <BodyChoresComplete/>

          </div>
          
        </div>
    </>
  );
};


