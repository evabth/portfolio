import React, { useEffect,useState } from 'react'
import Navbar from '../Components/Navbar';
import '../App.css'
import Under_Construction from '../Components/Under_Construction';




function Music(){

    // const [loading, setLoading] = useState(true);
    // const AUTHORIZE = "https://accounts.spotify.com/authorize";
    // const redirect_uri = 'http://localhost:3000/Music';
    // const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

    // useEffect(() => {
    //     if (!client_id) {
    //         console.error("Spotify client ID is missing");
    //         return;
    //     }

    //     let url = AUTHORIZE;
    //     url += "?client_id=" + client_id;
    //     url += "&response_type=code";
    //     url += "&redirect_uri=" + encodeURI(redirect_uri);
    //     url += "&show_dialog=false";
    //     url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";

    //     window.location.href = url;
    //     console.log("request made")
    //     setLoading(false);
    // }, [AUTHORIZE, client_id, redirect_uri]);

    //if (loading) {
    //return <div>Loading...</div>;
    //}
    
    return (
        
        <div className='Page'>
            <Navbar/>
            <Under_Construction/>
            
        </div>
        
    )
}




export default Music;