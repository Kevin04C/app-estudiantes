
import { useState } from "react";
import { Body, Header } from "./components";
import { ChoresFormulario } from "./components/ChoresFormulario";


export const Chores=()=> {

  const [view, setview] = useState(false);
  const [dataChores, setdataChores] = useState([]);


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