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
}) {
  return (
    <div className={styles.jobListing}>
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
          <li className={styles.filter}>{role}</li>
          <li className={styles.filter}>{level}</li>
          {languages.map((language, index) => (
            <li key={index} className={styles.filter}>
              {language}
            </li>
          ))}
          {tools.map((tool, index) => (
            <li key={index} className={styles.filter}>
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default JobListing;
