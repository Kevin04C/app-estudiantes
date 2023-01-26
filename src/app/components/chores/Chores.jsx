
import { useState } from "react";
import { Body, BodyChoresDetalles } from "./components/body";
import { ChoresFormulario, Header } from "./components/header";

export const Chores=()=> {

  const [view, setview] = useState(false);
  const [viewDetalles, setviewDetalles] = useState(false);

  const [data, setdata] = useState();

  console.log(data);
  



  return (
    <>
      <div className="container">

        <Header setview={setview} />

        <Body  setviewDetalles={setviewDetalles} setdata={setdata} />

        {/* SECCION DE LA VISTA DEL FORMULARIO PARA ASIGNAR TAREAS */}
        {
          view && (<ChoresFormulario setview={setview} />)
        }
        {/* SECCION DE LA VISTA DEL DETALLE DE LAS TAREAS */}
        {
          viewDetalles && (<BodyChoresDetalles   setview={setview} setviewDetalles={setviewDetalles} data={data}/>)
        }
      </div>
    </>
  );
};