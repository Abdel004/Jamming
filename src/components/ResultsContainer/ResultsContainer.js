import React, { useState } from 'react';
import styles from './ResultsContainer.module.css';
import SongCard from '../SongCard/SongCard';


function ResultsContainer({trackList, addToPlaylist}) {


    return (
        <div className={styles.resultCard}>
            <h1>Results</h1>
            {trackList.map(song => {
                return <SongCard key={song.uri} uri={song.uri} title={song.title} album={song.album} artist={song.artist} type="resultlist" handleButtonClick={addToPlaylist}/>
            })}
        </div>
    )


}


export default ResultsContainer;