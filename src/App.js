import SearchForm from './components/SearchForm/SearchForm';
import ResultsContainer from './components/ResultsContainer/ResultsContainer';
import PlaylistContainer from './components/PlaylistContainer/PlaylistContainer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <SearchForm />
      <div className={styles.resultContainer}>
        <ResultsContainer/>
        <PlaylistContainer />
        {/* <ResultsContainer className='right-result-container '/> */}
      </div>
    </div>
  );
}

export default App;
