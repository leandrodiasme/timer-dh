import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import styles from "../styles/components/Player.module.css";


export function Player(){

    const [isSpotifyActive, setSpotifyActive] = useState(false);
    const [isDeezerActive, setDeezerActive] = useState(false);

    
class App extends React.Component{
    render(){
        return(
        <>    
        <iframe src="https://open.spotify.com/embed/playlist/3OLzalSaaiwkfbezg6pfPu" width="451" height="420" className={isSpotifyActive ? `${styles.showPlayer}` : `${styles.removePlayer}`}></iframe>
        <iframe src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=451&height=420&color=EF5466&layout=dark&size=medium&type=playlist&id=8776031202&app_id=1" width="451" height="420"  className={isDeezerActive ? `${styles.showPlayer}` : `${styles.removePlayer}`}></iframe>
        </>
        )
    }
}


    function showSpotify(){
        setDeezerActive(false);
        setSpotifyActive(true);
    }

    function showDeezer(){
        setSpotifyActive(false);
        setDeezerActive(true);
    }
    
    return (
        <div>
        <h4 id="centralize">Escolha seu serviço de streaming favorito: <span className={styles.tooltip}><img src="/tooltip.png" alt="tooltip com instruções"/><span className={styles.tooltiptext}>Certifique-se de estar logado em seu serviço de streaming para poder escutar as músicas inteiras</span></span></h4>
          <div className={styles.streamServices}>
            <div>
            <button className={styles.spotify} onClick={showSpotify}>Spotify </button>
            </div>
            <div>
            <button className={styles.deezer} onClick={showDeezer}>Deezer</button>
              </div>
          </div>
            {/* <iframe src="https://open.spotify.com/embed/playlist/3OLzalSaaiwkfbezg6pfPu" width="451" height="420" frameborder="0" allowtransparency="true" allow="encrypted-media" className={isSpotifyActive ? `${styles.showPlayer}` : `${styles.removePlayer}`}></iframe> */}
            {/* <iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=451&height=420&color=EF5466&layout=dark&size=medium&type=playlist&id=8776031202&app_id=1" width="451" height="420"  className={isDeezerActive ? `${styles.showPlayer}` : `${styles.removePlayer}`}></iframe> */}
            <App/>
        </div>
    )
}