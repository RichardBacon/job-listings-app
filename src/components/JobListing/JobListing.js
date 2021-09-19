import styles from './JobListing.module.css';

function JobListing({
  company,
  logo,
  new: newListing,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  addFilter,
}) {
  const handleFilterClick = (key, value) => {
    addFilter(key, value);
  };

  return (
    <div
      className={`${styles.jobListing} ${
        featured && styles.jobListingFeatured
      }`}
    >
      <img className={styles.logo} src={logo} alt={company} />
      <header className={styles.header}>
        <h2 className={styles.company}>
          {company}
          {newListing && <span className={styles.new}>New!</span>}
          {featured && <span className={styles.featured}>Featured</span>}
        </h2>
        <h1 className={styles.position}>{position}</h1>
        <ul className={styles.details}>
          <li>{postedAt}</li>
          <li className={styles.detail}>{contract}</li>
          <li className={styles.detail}>{location}</li>
        </ul>
      </header>

      <div className={styles.filtersSection}>
        <ul className={styles.filters}>
          <li
            onClick={handleFilterClick.bind(null, 'role', role)}
            className={styles.filter}
          >
            {role}
          </li>
          <li
            onClick={handleFilterClick.bind(null, 'level', level)}
            className={styles.filter}
          >
            {level}
          </li>
          {languages.map((language, index) => (
            <li
              onClick={handleFilterClick.bind(null, 'languages', language)}
              key={index}
              className={styles.filter}
            >
              {language}
            </li>
          ))}
          {tools.map((tool, index) => (
            <li
              onClick={handleFilterClick.bind(null, 'tools', tool)}
              key={index}
              className={styles.filter}
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default JobListing;
