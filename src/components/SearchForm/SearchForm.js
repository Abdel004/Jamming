import React, { useState } from 'react';
import styles from "./SearchForm.module.css";

function SearchForm(props) {

    const [songTitle, setSongTitle] = useState('');

    const handleChange = (event) => {
        setSongTitle(event.target.value)
    }   

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='search' placeholder='Enter the song title you are looking for' value={songTitle} onChange={handleChange}/>
            <button type='submit'>Search</button>
        </form>
    )


}


export default SearchForm;