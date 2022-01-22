import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contatos from './components/ExercicioRouter/Contatos'
import Home from './components/ExercicioRouter/Home';

function App() {
 
   return (
      <Router>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/contatos' element={<Contatos/>}/>
              <Route path='*' element={<Home/>}/>              
          </Routes>
      </Router>
  );
    
    
}

export default App;
