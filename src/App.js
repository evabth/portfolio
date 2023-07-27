import './App.css';
import React from 'react';
import menu from './menu.png';
import email from './email.png';


function App() {
  return (
    <div className='Page'>
      <div className='Header'>
        <div className='Header-item'>
          <button className='Menu'><img className = 'Picture' src ={menu} alt = 'cannot be found' onClick={optionsMenu}/></button>
        </div>
        <div className='Header-item Title'>
          Evan Hild
        </div>
        <div className='Header-item'>
          <button className='Button'><img className='Picture' src ={email} alt= 'email' /></button>
        </div>
        
        
      </div>
    </div>
    
  );
}

let counter= 0;

const optionsMenu = function (){
  console.log(`hello ${counter++}`)
}

export default App;
