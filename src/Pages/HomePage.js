import '../App.css';
import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';

function HomePage() {

  useEffect(()=>{
    fetch("https://portfolio-server-6sq5.onrender.com")
      .then(() => {
        console.log("server pinged")
      })
      .catch(()=>{
        console.log("server pinged")
      })

  },[])

  return (
    <div className='Page'>
      <Navbar/>
      <div className = 'Content'>
        
        <h1 >Welcome!</h1>
        
 
        <div className='Image-Text-Container'>
          <img src="https://i.imgur.com/U313Pn5.jpg" alt ='Evan Hild' />
          <p>Hello my name is Evan Hild. I am currently studying computer science & economics 
            at the University of Maryland. I am currently in my Junior year and I plan to graduate 
            in 2026. Please feel free to explore around my website. I have projects that I am working on, 
            along with other information. If you would like to learn more about me please check out the 
            Projects page or you can visit my <a href= "https://github.com/evabth">Github</a> or my <a href ="https://www.linkedin.com/in/evan-hild-572b83272/">LinkedIn</a>.
            Thank You!
          </p>
          
        </div>

        
      </div>
    </div>
    
  );
}


export default HomePage