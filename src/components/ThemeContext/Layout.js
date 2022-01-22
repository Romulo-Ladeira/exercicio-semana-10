import React, { useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import { ThemeContext } from './themeContext';

export const Layout = () => {
  
  const {theme,handleClick} = useContext(ThemeContext)
  console.log(theme)
  return (
  <div style={{backgroundColor:theme.corPrincipal}}>
      <p style={{color:theme.corSecundaria}}>A dona aranha subiu pela parede
Veio a chuva forte e a derrubou
Já passou a chuva o Sol já vai surgindo
E a dona aranha continua a subir

Ela é teimosa e desobediente
Sobe, sobe, sobe e nunca está contente
A dona aranha subiu pela parede
Veio a chuva forte e a derrubou

Já passou a chuva o Sol já vai surgindo
E a dona aranha continua a descer
Ela é teimosa e desobediente
Desce, desce, desce e nunca está contente

A dona aranha subiu pela parede
Veio a chuva forte e a derrubou
Já passou a chuva o Sol já vai surgindo
E a dona aranha continua a subir

Ela é teimosa e desobediente
Sobe, sobe, sobe e nunca está contente</p>
<button onClick={()=>{handleClick()}}>trocar tema</button>
  </div>
  
  );
};


