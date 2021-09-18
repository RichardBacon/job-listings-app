import { useState } from 'react';
import styles from './JobListings.module.css';
import data from '../../data/data.json';
import Filters from '../Filters/Filters';
import JobListing from '../JobListing/JobListing';

function JobListings() {
  const [filters, setFilters] = useState([]);
  const [jobs] = useState(data);

  const addFilter = function (filter) {
    setFilters((filters) => {
      const updatedFilters = [...filters];
      updatedFilters.push(filter);

      return [...new Set(updatedFilters)];
    });
  };

  const removeFilter = function (filterToRemove) {
    setFilters((filters) => {
      const updatedFilters = filters.filter(
        (filter) => filter !== filterToRemove
      );

      return updatedFilters;
    });
  };

  return (
    <div className={styles.jobListings}>
      {filters.length > 0 && (
        <div className={styles.filters}>
          <Filters filters={filters} removeFilter={removeFilter} />
        </div>
      )}

      {jobs.map((job) => (
        <JobListing key={job.id} {...job} addFilter={addFilter} />
      ))}
    </div>
  );
}

export default JobListings;
