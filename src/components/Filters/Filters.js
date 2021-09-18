import styles from './Filters.module.css';
import iconRemove from '../../images/icon-remove.svg';

function Filters({ filters, removeFilter }) {
  const handleFiltersClick = (filter) => {
    removeFilter(filter);
  };

  return (
    <ul className={styles.filters}>
      {filters.map((filter, index) => (
        <li className={styles.filter} key={index}>
          <span className={styles.filterText}>{filter}</span>
          <img
            className={styles.iconRemove}
            src={iconRemove}
            alt="Remove"
            onClick={handleFiltersClick.bind(null, filter)}
          />
        </li>
      ))}
    </ul>
  );
}

export default Filters;
