import styles from './App.module.css';
import Header from '../Header/Header';
import JobListings from '../JobListings/JobListings';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <JobListings />
    </div>
  );
}

export default App;
