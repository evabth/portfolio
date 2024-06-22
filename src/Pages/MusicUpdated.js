import React, { useEffect,useState } from 'react'
import Navbar from '../Components/Navbar';
import '../App.css'
import './Page Styles/music_style.css'


function MusicUpdated (){
    const [topArtistData, setTopArtistData] = useState([])
    const [topTrackData, setTopTrackData] = useState([])
    const [isHidden, setIsHidden] = useState(false);
    const [errorOccured,setErrorOccured] = useState(false)


    useEffect(()=>{

        fetch("https://portfolio-server-6sq5.onrender.com/Music/Info")
            .then((response) => response.json())
            .then((musicData) => {
                console.log("data recieved",musicData)
                setTopArtistData(musicData.TopArtists)
                setTopTrackData(musicData.TopTracks)
                setIsHidden(true)
            })
            .catch((error) => {
                console.log(error)
                setIsHidden(true)
                setErrorOccured(true)
            })

    },[])



    return (
        <div className='Page'>
            <Navbar/>
            <div className='Content'>

                {!isHidden && <div className='warning'>
                    <p>To reduce costs, the backend server will spin down with inactivity and may take a minute to boot back up. 
                        If the page does not have music titles loaded please be patient. Thank you.</p>
                </div>}

                {errorOccured && <div className='warning-error'>
                    <p>An error has occured loading music data please reload the page. If that does not work please come again later.</p>
                
                </div>}
                
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