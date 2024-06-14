import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';




function App() {

  return (
    <div class='Page'>
      <Navbar/>
      <div class = 'Content'>
        
        <h1 >Welcome!</h1>
        
 
        <div class='Image-Text-Container'>
          <img src="https://i.imgur.com/U313Pn5.jpg" alt ='Image of Evan Hild (Image could not be loaded)' />
          <p>Hello my name is Evan Hild. I am currently studying computer science & economics 
            at the University of Maryland. I am currently in my sophomore year and I plan to graduate 
            in 2026. Please feel free to explore around my website. I have projects that I am working on, 
            along with other information. If you would like to reach me, please press the mail icon in the top right of the screen!
          </p>
          
        </div>

        
      </div>
      
    </div>
    
  );
}







export default App;
