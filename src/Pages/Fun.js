import React, { useEffect,useState } from 'react'
import Navbar from '../Components/Navbar';
import '../App.css'
import './Page Styles/fun_style.css'



function Fun(){

    const catFactRef = useState("")

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

    const fetchCatFact = async () => {
        try {
            const response = await fetch('https://catfact.ninja/fact');
            const data = await response.json();
            if (catFactRef.current) {
                catFactRef.current.textContent = data.fact;
            }
        } catch (error) {
            console.error('Error fetching cat fact:', error);
        }
    };
    
    
    return (
        
        <div className='Page'>
            <Navbar/>
            <div class = 'cat_fact'>
               <p >Here is a fun fact about Cats:</p>

                <p ref = {catFactRef} class = 'inner_fact'></p>
                <button class = 'button_reload'  onClick={fetchCatFact}>Load Another Fact</button>
            </div>
            
            
                
            

            <div class = "content_wrapper ">
                <img class = "typeracer_pic typeracer_item" src="https://data.typeracer.com/misc/badge?user=__evab__" border="0" alt="TypeRacer.com scorecard for user Evan"/>
                <p class ="typeracer_item">I like to spend time practicing my typing speed. This is my typeracer. I'll race you any day!</p>
                
            </div>
            
        </div>
        
    )
}



export default Fun;