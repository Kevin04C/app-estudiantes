
import { useState } from "react";
import { Body, BodyChoresDetalles } from "./components/body";
import { ChoresFormulario, Header } from "./components/header";

export const Chores=()=> {

  const [view, setview] = useState(false);
  const [viewDetalles, setviewDetalles] = useState(false);

  //dataChores sirve para almacenar los objetos que se crean a partir de las tareas
  const [dataChores, setdataChores] = useState([]);

  return (
    <>
      <div className="container">

        <Header setview={setview} />

        <Body dataChores={dataChores} setviewDetalles={setviewDetalles}/>

        {/* SECCION DE LA VISTA DEL FORMULARIO PARA ASIGNAR TAREAS */}
        {
          view && (<ChoresFormulario setview={setview} setdataChores={setdataChores} dataChores={dataChores}/>)
        }
        {/* SECCION DE LA VISTA DEL DETALLE DE LAS TAREAS */}
        {
          viewDetalles && (<BodyChoresDetalles setviewDetalles={setviewDetalles}/>)
        }
      </div>
    </>
  );
};