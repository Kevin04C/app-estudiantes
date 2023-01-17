
/* import TimeAgo from "javascript-time-ago"; */
import { useState } from "react";
import { Body, Header } from "./components";
import { ChoresFormulario } from "./components/ChoresFormulario";
/* import en from 'javascript-time-ago/locale/en' */


export const Chores=()=> {

  const [view, setview] = useState(false);
  const [dataChores, setdataChores] = useState([]);

  const dat=[...dataChores,dataChores];
  
  localStorage.setItem('tareas',JSON.stringify(dat));



  return (
    <>
      <div className="container">
        <Header setview={setview} />
        <Body dataChores={dataChores}/>
        {
          view && (<ChoresFormulario setview={setview} setdataChores={setdataChores} dataChores={dataChores}/>)
        }
      </div>
    </>
  );
};