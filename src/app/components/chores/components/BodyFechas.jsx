import React from 'react'
import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es.json'
import ReactTimeAgo from 'react-time-ago'


TimeAgo.addDefaultLocale(es)
TimeAgo.addLocale(es)



export const BodyFechas = ({fechaInicio,fechaFin,fechaCreacion}) => {

        const dI=fechaInicio;
        const dF=fechaFin;
        const date=new Date(dI);
        const date2=new Date(dF);
        let mili=24*60*60*1000;
        let militrascu=Math.abs(date.getTime()-date2.getTime());
        let diastrans=Math.round(militrascu/mili);

        const fechaI=date.toLocaleDateString('es-us');
        const fechaF=date2.toLocaleDateString('es-us');

       
  return (
    <>
        
         <h1>Creado: <ReactTimeAgo date={fechaCreacion}  locale='es-us'/></h1>
    </>
  )
}
