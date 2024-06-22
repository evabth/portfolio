import React, { useEffect,useState } from 'react'
import Navbar from '../Components/Navbar';
import '../App.css'
import './Page Styles/fun_style.css'



function Fun(){

    const [catFact,setCatFact] = useState("")

    // This query gets a fun fact about cats
    
    useEffect(() => {

        fetch('https://catfact.ninja/fact').then((res) => res.json())
        .then((data)=>{

            setCatFact(data.fact)
        
        });

    },[])

    const fetchCatFact = async () => {
        try {
            const response = await fetch('https://catfact.ninja/fact');
            const data = await response.json();
            setCatFact(data.fact)
        } catch (error) {
            console.error('Error fetching cat fact:', error);
        }
    };
    
    
    return (
        
        <div className='Page'>
            <Navbar/>
            <div className = 'cat_fact'>
               <p >Here is a fun fact about Cats:</p>

                <p className = 'inner_fact'>{catFact}</p>
                <button className = 'button_reload'  onClick={fetchCatFact}>Load Another Fact</button>
            </div>
            
            
                
            

            <div className = "content_wrapper ">
                <img className = "typeracer_pic typeracer_item" src="https://data.typeracer.com/misc/badge?user=__evab__" border="0" alt="TypeRacer.com scorecard for user Evan"/>
                <p className ="typeracer_item">I like to spend time practicing my typing speed. This is my typeracer. I'll race you any day!</p>
                
            </div>
            
        </div>
        
    )
}



export default Fun;