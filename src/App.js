import './App.css';
import React from 'react';
import menu from './menu.png';
import email from './email.png';
import menuDarker from './menudarker.png';
import emailDarker from './emaildarker.png';

function App() {
  return (
    <div className='Page'>
      <div className='Header'>
        <div className='Header-item'>
          <button className='Menu'><img className = 'Picture' src ={menu} alt = 'cannot be found' onClick={optionsMenu} onMouseOver={(event) => menuOn(event.target)} onMouseOut={(event) => menuOff(event.target)}/></button>
        </div>
        <div className='Header-item Title'>
          Evan Hild
        </div>
        <div className='Header-item'>
          <button className='Button'><img className='Picture' src ={email} alt= 'email' onMouseOver={(event) => emailOn(event.target)} onMouseOut={(event) => emailOff(event.target)}/></button>
        </div>
        
        
      </div>
    </div>
    
  );
}

let counter= 0;

const optionsMenu = function (){
  console.log(`hello ${counter++}`)
}

const menuOn = function (image){
  image.src = menuDarker
}

const menuOff = function (image){
  image.src = menu
}

const emailOn = function (image){
  image.src = emailDarker
}

const emailOff = function (image){
  image.src = email
}

export default App;
