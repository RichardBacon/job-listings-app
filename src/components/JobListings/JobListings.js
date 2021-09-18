import { useState } from 'react';
import styles from './JobListings.module.css';
import data from '../../data/data.json';
import JobListing from '../JobListing/JobListing';

function JobListings() {
  const [jobs] = useState(data);

  return (
    <div className={styles.jobListings}>
      {jobs.map((job) => (
        <JobListing key={job.id} {...job} />
      ))}
    </div>
  );
}

export default JobListings;
