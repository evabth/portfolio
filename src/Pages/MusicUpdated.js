import React, { useEffect,useState } from 'react'
import Navbar from '../Components/Navbar';
import '../App.css'
import './Page Styles/music_style.css'


function MusicUpdated (){
    const [topArtistData, setTopArtistData] = useState([])
    const [topTrackData, setTopTrackData] = useState([])


    useEffect(()=>{

        fetch("https://portfolio-server-6sq5.onrender.com/Music/Info")
            .then((response) => response.json())
            .then((musicData) => {
                console.log("data recieved",musicData)
                setTopArtistData(musicData.TopArtists)
                setTopTrackData(musicData.TopTracks)
            })
            .catch((error) => {
                console.log(error)
            })

    },[])



    return (
        <div className='Page'>
            <Navbar/>
            <div className='Content'>
                <h1>Top Artists</h1>
                <div className="grid-container">
                {
                    topArtistData.map(item => (
                    
                        <div className="grid-item">
                            <img src={item.imageUrl} alt={item.name +" the alt is being used"} />
                            <p>{item.name}</p>
                        </div>
                    
                ))
                }
                </div>
                <h1>Top Tracks</h1>
                <div className="grid-container">
                {
                    topTrackData.map(item => (
                    
                        <div className="grid-item">
                            <img src={item.imageUrl} alt={item.name +" the alt is being used"} />
                            <p>{item.name}</p>
                        </div>
                    
                ))}
                </div>
            </div>
            
        </div>
    )
}

export default MusicUpdated;