import React from 'react'
import Navbar from '../Components/Navbar';
import '../App.css'
import UnderConstruction from '../Components/UnderConstruction';



function Email(){
    fetch('https://catfact.ninja/fact').then((res) => res.json())
    .then((data)=>{
        console.log(data)
    });
    return (
        
        <div className='Page'>
            <Navbar/>
            <UnderConstruction/>
            
        </div>
        
    )
}





export default Email;