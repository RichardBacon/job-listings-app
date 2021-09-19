import { useEffect, useState } from 'react';
import styles from './JobListings.module.css';
import data from '../../data/data.json';
import Filters from '../Filters/Filters';
import JobListing from '../JobListing/JobListing';

function JobListings() {
  const [filters, setFilters] = useState({
    role: [],
    level: [],
    languages: [],
    tools: [],
  });
  const [jobs, setJobs] = useState(data);

  useEffect(() => {
    setJobs((jobs) => {
      const updatedJobs = data.filter(
        (job) =>
          (filters.role.length === 0 || filters.role.includes(job.role)) &&
          (filters.level.length === 0 || filters.level.includes(job.level)) &&
          (filters.languages.length === 0 ||
            filters.languages.every((r) => job.languages.includes(r))) &&
          (filters.tools.length === 0 ||
            filters.tools.every((r) => job.tools.includes(r)))
      );

      return updatedJobs;
    });
  }, [filters]);

  const addFilter = function (key, value) {
    setFilters((filters) => {
      const updatedValue = [...filters[key]];
      updatedValue.push(value);
      const updatedFilters = { ...filters, [key]: updatedValue };

      return updatedFilters;
    });
  };

  const removeFilter = function (key, value) {
    setFilters((filters) => {
      const updatedValue = filters[key].filter((updated) => updated !== value);
      const updatedFilters = { ...filters, [key]: updatedValue };

      return updatedFilters;
    });
  };

  return (
    <div className={styles.jobListings}>
      {Object.values(filters).some((value) => value.length > 0) && (
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
