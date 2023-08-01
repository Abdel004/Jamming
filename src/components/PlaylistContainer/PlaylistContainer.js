import React, { useState } from 'react';
import styles from './PlaylistContainer.module.css';
import SongCard from '../SongCard/SongCard';


function PlaylistContainer({ playList, removeFromTracklist }) {


    const addPlaylistToSpotify = (event) => {

    }
    
    return (
        <div className={styles.resultCard}>
            <h1><input className={styles.playlistInput} placeholder='Enter playlist name' /></h1>
            {playList.map(song => {
                return <SongCard key={song.uri} uri={song.uri} title={song.title} album={song.album} artist={song.artist} type="playList" handleButtonClick={removeFromTracklist} />
            })}
            <button type='submit' onClick={addPlaylistToSpotify} className={styles.saveButton}>SAVE TO SPOTIFY</button>
        </div>
    )


}


export default PlaylistContainer;