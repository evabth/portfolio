import React, { useEffect,useState } from 'react'
import Navbar from '../Components/Navbar';
import '../App.css'
import './Page Styles/music_style.css'
import Under_Construction from '../Components/Under_Construction';
import { useNavigate } from 'react-router-dom';




function Music(){

    const [loading, setLoading] = useState(true);
    const [authorizationCode, setAuthorizationCode] = useState(null);
    const [accessToken, setAccessToken] = useState(null)
    const [refreshToken, setRefreshToken] = useState(null)
    const [topArtistData, setTopArtistData] = useState([])
    const [topTrackData, setTopTrackData] = useState([])
    const AUTHORIZE = "https://accounts.spotify.com/authorize";
    const TOKEN = "https://accounts.spotify.com/api/token";
    const redirect_uri = 'https://evans-portfolio.onrender.com/Music';
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
    const PLAYLISTS = "https://api.spotify.com/v1/me/playlists";
    const TOPARTISTS = "https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=14"
    const TOPTRACKS = "https://api.spotify.com/v1/me/top/tracks?limit=14"
    const navigate = useNavigate();

    useEffect(()=>{
        if (accessToken && refreshToken){
            getTopItems();
            getTopTracks();
        }
        
      },[accessToken,refreshToken])

    useEffect(() => {

        


        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            console.log("Authorization code received!");
            setAuthorizationCode(code)
            fetchAccessToken(code)
            // Here you can handle the authorization code, for example, send it to the server for token exchange
            setLoading(false); // Stop loading

            // Clear the query parameters from the URL to prevent the loop
            navigate('/Music');
        } else {
            if (!client_id) {
                console.error("Spotify client ID is missing");
                return;
            }

            let url = AUTHORIZE;
            url += "?client_id=" + client_id;
            url += "&response_type=code";
            url += "&redirect_uri=" + encodeURI(redirect_uri);
            url += "&show_dialog=false";
            url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private user-top-read";

            window.location.href = url;
            console.log("Authorization request made");
        }
    }, [AUTHORIZE, client_id, redirect_uri, navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    function fetchAccessToken(code) {
        
        let body = "grant_type=authorization_code";
        body += "&code=" + code; 
        body += "&redirect_uri=" + encodeURI(redirect_uri);
        body += "&client_id=" + client_id;
        body += "&client_secret=" + client_secret;
        callAuthorizationApi(body);
    }

    function callAuthorizationApi(body) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", TOKEN, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Authorization', 'Basic ' + btoa(client_id + ":" + client_secret));
        xhr.send(body);
        xhr.onload = handleAuthorizationResponse;
    }


    function handleAuthorizationResponse() {

        if ( this.status == 200 ){
            console.log("EVERYTHING WORKED")
            var data = JSON.parse(this.responseText);
            var data = JSON.parse(this.responseText);
            if ( data.access_token != undefined ){
                setAccessToken(data.access_token);
                
                
            }
            if ( data.refresh_token  != undefined ){
                setRefreshToken(data.refresh_token);
                
            }

            getTopItems();
            getTopTracks();

        }
        else {
            console.log(this.responseText);
            alert(this.responseText);
        }
    }

    function refreshAccessToken(){
        let body = "grant_type=refresh_token";
        body += "&refresh_token=" + refreshToken;
        body += "&client_id=" + client_id;
        callAuthorizationApi(body);
    }


    function callApi(method, url, body, callback) {
        console.log("making api call");
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
        
        xhr.onload = function() {
          console.log("api call returned");
          if (xhr.status === 200) {
            console.log("api call success");
            var data = JSON.parse(xhr.responseText);
            console.log(data);
            callback(data);
          } else if (xhr.status === 401) {
            refreshAccessToken();
          } else {
            console.log(xhr.responseText);
            console.log(xhr.statusText);
            alert(xhr.responseText);
          }
        };
        
        xhr.send(body);
        console.log("body sent");
    }

      
      
    function getTopItems() {
    if (accessToken && refreshToken) {
        callApi("GET", TOPARTISTS, null, function(data) {
        // Handle the response data here
        console.log("Received top items:", data);
        setTopArtistData(data.items);
        });
    }
    }
    
    function getTopTracks() {
    if (accessToken && refreshToken) {
        callApi("GET", TOPTRACKS, null, function(data) {
        setTopTrackData(data.items);
        });
    }
    }
      
    

    
    return (
        
        <div className='Page'>
            <Navbar/>
            <div className='Content'>
                <h1>Top Artists</h1>
                <div className="grid-container">
                {
                    topArtistData.map(item => (
                    
                        <div key={item.id} className="grid-item">
                            <img src={item.images[0].url} alt={item.name +" the alt is being used"} />
                            <p>{item.name}</p>
                        </div>
                    
                ))
                }
                </div>
                <h1>Top Tracks</h1>
                <div className="grid-container">
                {
                    topTrackData.map(item => (
                    
                        <div key={item.id} className="grid-item">
                            <img src={item.album.images[0].url} alt={item.name +" the alt is being used"} />
                            <p>{item.name}</p>
                        </div>
                    
                ))}
                </div>
            </div>
            
        </div>
        
    )
}




export default Music;