import SearchForm from './components/SearchForm/SearchForm';
import ResultsContainer from './components/ResultsContainer/ResultsContainer';
import PlaylistContainer from './components/PlaylistContainer/PlaylistContainer';
import styles from './App.module.css';
import { useState } from 'react';
import Spotify from './modules/Spotify';

function App() {

  const [tracklist, setTracklist] = useState([
  ])

  const [playlist, setPlaylist] = useState([

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

  const fetchSpotifyResults = async (searchQuery) => {
    let accessToken = localStorage.getItem('access_token');

    const response = await fetch(`https://api.spotify.com/v1/search?q=track:${searchQuery}&type=track`, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });

    const tracklist = await Spotify.search(searchQuery)
    setTracklist(tracklist)
  }

  const saveSpotifyPlayList = (playlistTitle) => {
    const URIS = playlist.map(track => track.uri)
    Spotify.savePlaylist(playlistTitle, URIS)
  }

  return (
    <div className={styles.container}>
      <SearchForm searchForResults={fetchSpotifyResults} />
      <div className={styles.resultContainer}>
        <ResultsContainer trackList={tracklist} addToPlaylist={handleAdditionToPlaylist} />
        <PlaylistContainer playList={playlist} removeFromTracklist={handleRemovalFromTracklist} savePlaylist={saveSpotifyPlayList}/>
      </div>
    </div>
  );
}

export default App;
