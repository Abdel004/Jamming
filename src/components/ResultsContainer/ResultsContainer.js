import React, { useState } from 'react';
import styles from './ResultsContainer.module.css';
import SongCard from '../SongCard/SongCard';


function ResultsContainer(props) {


    return (
        <div className={styles.resultCard}>
            <h1>Results</h1>
            <SongCard title="sdafsfafsfa" artist='losfksaf' album='xsads'/>
            <SongCard title="sdafsfafsfa" artist='losfksaf' album='xsads'/>
        </div>
    )


}


export default ResultsContainer;