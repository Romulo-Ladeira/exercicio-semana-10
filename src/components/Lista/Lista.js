import React, { useReducer } from 'react';

export const Lista = () => {

  const defaultState= 
  { 
      listaDatas:[]
  }

  const reducer = (state,action) =>{

    if (action.type === 'ADICIONAR'){
       const newLista =[...state.listaDatas, action.payload]
        
       return (
           {...state, listaDatas:newLista}
           
       )
    }
    if(action.type ==='REMOVER'){
        const newLista = state.listaDatas.filter((data,index)=>{
            return index !== state.listaDatas.length - 1
        })
         return (
           {...state, listaDatas:newLista}
           )
    }

  }
  const [state, dispatch] = useReducer(reducer, defaultState )
  
  return (
  <>
  <h1>lista De Datas</h1>
  <button onClick={()=>{
    
      const data = new Date().toString()
      dispatch({type:'ADICIONAR', payload:data})
      }}>adicionar data</button>
  
  <button onClick={()=>{
      dispatch({type:'REMOVER'})
  }}>remover botão</button>
  
  <ul>
      {state.listaDatas.map((data)=>{
          
          return <li>{data}</li>
      })}
  </ul>
  </>
  
  );
};


