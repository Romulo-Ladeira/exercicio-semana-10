import { useContext } from "react";
import {AutenticadorContext} from './Context'
import React from 'react';


const Autenticador = () => {
    
  const name = 'Patricio'
  const {autenticado} = useContext(AutenticadorContext)
  return <>
    <h1>{autenticado&&name}</h1>
  </>;
};

export default Autenticador;
