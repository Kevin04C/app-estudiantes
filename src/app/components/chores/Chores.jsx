import { useState } from 'react';
import { Body, BodyChoresDetalles } from './components/body';
import { ChoresFormulario, Header } from './components/header';

export const Chores = () => {
  const [view, setview] = useState(false);
  const [viewDetalles, setviewDetalles] = useState(false);
  const [Formulario, setFormulario] = useState('');
  const [data, setdata] = useState();

  return (
    <>
      <Header setview={setview} setFormulario={setFormulario} />

      <Body setviewDetalles={setviewDetalles} setdata={setdata} />

      {/* SECCION DE LA VISTA DEL FORMULARIO PARA ASIGNAR TAREAS */}
      {view && <ChoresFormulario setview={setview} Formulario={Formulario} data={data} />}
      {/* SECCION DE LA VISTA DEL DETALLE DE LAS TAREAS */}
      {viewDetalles && (
        <BodyChoresDetalles
          setview={setview}
          setviewDetalles={setviewDetalles}
          data={data}
          setFormulario={setFormulario}
        />
      )}
    </>
  );
};
