import React from "react";
import styles from "./SongCard.module.css";

const SongCard = ({ title, artist, album, uri, type, handleButtonClick }) => {

  const handleClick = (event) => {
    handleButtonClick({
      uri: uri,
      title: title,
      artist: artist,
      album: album,
    })
  }


  const buttonType = type === 'resultlist' ? <button className={styles.cardButton} onClick={handleClick}>+</button> : <button onClick={handleClick} className={`${styles.cardButton} ${styles.deleteButton}`}>-</button>

  return (
    <>
        <div className={styles.card}>
          <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.artist}>{artist} | {album}</p>
          </div>
          <div className={styles.buttonContainer}>
            {buttonType}
          </div>
        </div>
      <hr className={styles.separator} />
    </>
  );
};

export default SongCard;