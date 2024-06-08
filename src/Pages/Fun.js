import React, { useEffect, useRef } from 'react'
import Navbar from '../Components/Navbar';
import '../App.css'



function Fun(){

    const catFactRef = useRef(null)

    // This query gets a fun fact about cats
    useEffect(() => {

        fetch('https://catfact.ninja/fact').then((res) => res.json())
        .then((data)=>{
            console.log(data)

            if (catFactRef.current){
                catFactRef.current.textContent = data.fact
            }
        
        });

    })
    
    return (
        
        <div className='Page'>
            <Navbar/>
            <div>
                <p>Here is a fun fact about Cats:</p>
                <p ref = {catFactRef}></p>

                <a href="https://data.typeracer.com/pit/profile?user=__evab__&ref=badge" target="_top"><img src="https://data.typeracer.com/misc/badge?user=__evab__" border="0" alt="TypeRacer.com scorecard for user __evab__"/></a>
            </div>
            
        </div>
        
    )
}



export default Fun;