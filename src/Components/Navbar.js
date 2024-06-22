import './NavbarStyle.css'
import React from 'react';
import {Link} from 'react-router-dom';
import menu from './menu.png';
import email from './email.png';
import menuDarker from './menudarker.png';
import emailDarker from './emaildarker.png';


function Navbar () {
    return (
      <div>
        <div className='Header'>
          <div className='Header-item'>
            <button className='Menu'>
              <img className = 'Picture' src ={menu} alt = 'cannot be found' onClick={optionsMenu} onMouseOver={(event) => menuOn(event.target)} onMouseOut={(event) => menuOff(event.target) }/>
              <div className='dropdown-content' id = 'dropdown'>
                <Link to = '/'>Home</Link>
                <Link to = '/Projects'>Projects</Link>
                <Link to = '/Music'>Music</Link>
                <Link to = '/Fun'>Fun</Link>
              </div>
            </button>
          </div>
          <div className='Header-item Title'>
            <Link to = '/' className = 'name_title'>Evan Hild</Link>
          </div>
          <div className='Header-item'>
            <button className='email'>
              <Link to = '/Email'>
                <img className='Picture' src ={email} alt= 'email' onMouseOver={(event) => emailOn(event.target)} onMouseOut={(event) => emailOff(event.target)}/>
              </Link>
            </button>
          </div>
          
          
        </div>
        <div className = "spacing"></div>
      </div>
    )
}

const optionsMenu = function (){
    let dropdown = document.getElementById('dropdown')
  
    dropdown.classList.toggle('show')
  
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

export default Navbar;