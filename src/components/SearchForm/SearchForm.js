import React, { useState } from 'react';
import styles from "./SearchForm.module.css";

function SearchForm({searchForResults}) {

    const [songTitle, setSongTitle] = useState('');

    const handleChange = (event) => {
        setSongTitle(event.target.value)
    }   

    const handleSubmit = (event) => {
        event.preventDefault()
        setSongTitle('')
        searchForResults(event.target[0].value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='search' placeholder='Enter the song title you are looking for' value={songTitle} onChange={handleChange}/>
            <button type='submit'>Search</button>
        </form>
    )


}


export default SearchForm;