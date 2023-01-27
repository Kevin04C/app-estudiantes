import { FaAngleRight } from "react-icons/fa";
import { BodyContainer } from "./BodyContainer";

export const Body = ({dataChores, setviewDetalles}) => {

  return (
    <>
        <div className="front-body">

          <BodyContainer dataChores={dataChores} setviewDetalles={setviewDetalles}/>

          <div className="front-body__workFinished">

              <p className="front-body__workFinished__titulo">Tareas Terminadas</p>

              {/* COMPONENTES DE LAS TAREAS FINALIZADAS */}
              <div className="front-body__workFinished__componente">

                <div className="front-body__workFinished__componente__circulo"></div>

                <div className="front-body__workFinished__componente__tarea">
                    <p className="front-body__workFinished__componente__tarea__asignatura">ALGEBRA</p>
                    <p className="front-body__workFinished__componente__tarea__fecha">18 de noviembre</p>
                </div>

                <div className="front-body__workFinished__componente__icono">
                  <FaAngleRight/>
                </div>

              </div>

              <div className="front-body__workFinished__componente">
                <div className="front-body__workFinished__componente__circulo"></div>

                <div className="front-body__workFinished__componente__tarea">
                    <p className="front-body__workFinished__componente__tarea__asignatura">MATEMATICA</p>
                    <p className="front-body__workFinished__componente__tarea__fecha">18 de noviembre</p>
                </div>

                <div className="front-body__workFinished__componente__icono">
                  <FaAngleRight/>
                </div>
              </div>

              <div className="front-body__workFinished__componente">
                <div className="front-body__workFinished__componente__circulo"></div>

                <div className="front-body__workFinished__componente__tarea">
                    <p className="front-body__workFinished__componente__tarea__asignatura">RELIGION</p>
                    <p className="front-body__workFinished__componente__tarea__fecha">18 de noviembre</p>
                </div>

                <div className="front-body__workFinished__componente__icono">
                  <FaAngleRight/>
                </div>
              </div>

          </div>
        </div>
    </>
  );
};


