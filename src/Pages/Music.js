import React from 'react'
import Navbar from '../Components/Navbar';
import '../App.css'
import Under_Construction from '../Components/Under_Construction';



function Music(){
    fetch('https://catfact.ninja/fact').then((res) => res.json())
    .then((data)=>{
        console.log(data)
    });
    return (
        
        <div className='Page'>
            <Navbar/>
            <Under_Construction/>
            
        </div>
        
    )
}




export default Music;