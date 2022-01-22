import React from 'react';
import { Link } from 'react-router-dom';

const Contatos = () => {
  return <div>
      <p>telefone:7778-0000</p>
      <p>redes sociais: @exemplo</p>
      <Link to='/'>Home</Link>
  </div>;
};

export default Contatos;
