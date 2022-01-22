import './App.css';
import {Calculadora} from './components/Calculadora'
import {AutenticadorProvider} from './components/Autenticador/Context'
import { useState } from 'react';
import Botao from './components/Autenticador/Botao';
import Autenticador from './components/Autenticador/Autenticador';

function App() {
 
  return (
    <AutenticadorProvider>
      <Autenticador/>
      <Botao/>
    </AutenticadorProvider>
  );
    
    
}

export default App;
