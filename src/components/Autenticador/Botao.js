import React from 'react';
import { useContext } from "react";
import {AutenticadorContext} from './Context'


const Botao = () => {
  const{autenticado,setAutenticado} = useContext(AutenticadorContext)
  return <button onClick={()=>{setAutenticado(!autenticado)}}>{autenticado?'Logoff':'Login'}</button>;
};

export default Botao