import SearchForm from './components/SearchForm/SearchForm';
import ResultsContainer from './components/ResultsContainer/ResultsContainer';
import PlaylistContainer from './components/PlaylistContainer/PlaylistContainer';
import styles from './App.module.css';
import { RequestAccessToken } from './modules/utils';
import { useEffect, useState } from 'react';

function App() {

  useEffect(() => {
    let accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      RequestAccessToken()
    }

  }, [])



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

  const fetchSpotifyResults = async (searchQuery) => {
    let accessToken = localStorage.getItem('access_token');

    const response = await fetch(`https://api.spotify.com/v1/search?q=track:${searchQuery}&type=track`, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });

    const data = await response.json()
    const trackList = data.tracks.items.map(item => {
      const artists = item.artists.map(artist => {
        return artist.name
      })
      let artist;
      if (artists.length > 1) {
        artist = artists.join(" & ")

      } else {
        artist = artists[0]
      }

      // console.log(artist)

      return {
        uri: item.uri,
        title: item.name,
        artist: artist,
        album: item.album.name,
      }

    })

    setTracklist(trackList)
  }

  return (
    <div className={styles.container}>
      <SearchForm searchForResults={fetchSpotifyResults} />
      <div className={styles.resultContainer}>
        <ResultsContainer trackList={tracklist} addToPlaylist={handleAdditionToPlaylist} />
        <PlaylistContainer playList={playlist} removeFromTracklist={handleRemovalFromTracklist} />
      </div>
    </div>
  );
}

export default App;
