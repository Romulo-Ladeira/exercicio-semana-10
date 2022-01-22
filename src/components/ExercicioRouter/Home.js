import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (<>
    <div>
        <h1>Bem vindos ao nosso exemplo</h1>
        <p>espero que gosto do nosso design minimalista, esse texto só tem o objetivo de encher linguiça</p>
    </div>
    <footer><Link to='/contatos'>Contatos</Link></footer>
  </>);
};

export default Home;
