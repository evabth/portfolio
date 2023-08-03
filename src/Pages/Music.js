import React from 'react'
import Navbar from '../Components/Navbar';
import '../App.css'



function Music(){
    fetch('https://catfact.ninja/fact').then((res) => res.json())
    .then((data)=>{
        console.log(data)
    });
    return (
        
        <div className='Page'>
            <Navbar/>
            <p>Music</p>
            
        </div>
        
    )
}




export default Music;