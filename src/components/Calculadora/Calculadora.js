import React, { useReducer, useState } from 'react';

export const Calculadora = () => {

    const[operacao, setOperacao] = useState('SOMAR')
    const[numero, setNumero] = useState()
    
    const reducer = (state, action)=>{
        switch(action.type){
            case 'SOMAR':
                return {...state, resultado: state.resultado + action.payload}
            case 'SUBTRAIR':
                return {...state, resultado: state.resultado - action.payload}
             case 'MULTIPLICAR':
                return {...state, resultado: state.resultado * action.payload}
            case 'DIVIDIR':
                return {...state, resultado: state.resultado / action.payload}
            
            default:
                return state 
        }
    } 
    
    const [state, dispatch] = useReducer(reducer, {resultado:0});

    const handleOperacao = (e)=>{
        setOperacao(e.target.value)
    }
    const handleNumero = (e) =>{
        setNumero(Number(e.target.value))
        
    }

  return( 
  <>
    <input type='number' onChange={handleNumero} />
    <select onChange={handleOperacao}>
        <option value='SOMAR'>somar</option>
        <option value='SUBTRAIR'>subtrair</option>
        <option value= 'MULTIPLICAR'>multiplicar</option>
        <option value= 'DIVIDIR'>dividir</option>
    </select>
    <button onClick={()=>{dispatch({type:operacao, payload:numero})}}>Resultado</button>
    <p>Resultado: {state.resultado}</p>
  </>);
};

export default Calculadora;
