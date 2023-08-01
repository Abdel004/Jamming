import SearchForm from './components/SearchForm/SearchForm';
import ResultsContainer from './components/ResultsContainer/ResultsContainer';
import PlaylistContainer from './components/PlaylistContainer/PlaylistContainer';
import styles from './App.module.css';
import { useState } from 'react';

function App() {

  const [tracklist, setTracklist] = useState([
    {
      title: "Leave The Door Open",
      artist: "Silk Sonic",
      album: "An Evening with Silk Sonic",
      uri: "spotify:track:7MAibcTli4IisCtbHKrGMh"
    },
    {
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      uri: "spotify:track:4ZtFanR9U6ndgddUvNcjcG"
    },
    {
      title: "Montero (Call Me By Your name)",
      artist: "Lil Nas X",
      album: "Montero",
      uri: "spotify:track:67BtfxlNbhBmCDR2L2l8qd"
    }
  ])

  const [playlist, setPlaylist] = useState([
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      uri: "spotify:track:0VjIjW4GlUZAMYd2vXMi3b"
    },
    {
      title: "drivers license",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      uri: "spotify:track:7lPN2DXiMsVn7XUKtOW1CS"
    },
  ])

  const handleAdditionToPlaylist = (song) => {
    const inPlayList = playlist.filter(track => track.uri === song.uri)
    if (inPlayList.length === 0) {
      setPlaylist(oldPlaylist => [...oldPlaylist, song])
      setTracklist(oldTracklist => oldTracklist.filter(track => track.uri !== song.uri))
    } else {
      alert("Song already in playlist")
    }
  }

  const handleRemovalFromTracklist = (song) => {
    setPlaylist(oldPlaylist => oldPlaylist.filter(track => track.uri !== song.uri))
    setTracklist(oldTracklist => [...oldTracklist, song])
  }

  return (
    <div className={styles.container}>
      <SearchForm />
      <div className={styles.resultContainer}>
        <ResultsContainer trackList={tracklist} addToPlaylist={handleAdditionToPlaylist} />
        <PlaylistContainer playList={playlist} removeFromTracklist={handleRemovalFromTracklist} />
      </div>
    </div>
  );
}

export default App;
