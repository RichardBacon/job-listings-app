import styles from './Filters.module.css';
import iconRemove from '../../images/icon-remove.svg';

function Filters({ filters, removeFilter }) {
  const handleFiltersClick = (key, value) => {
    removeFilter(key, value);
  };

  return (
    <ul className={styles.filters}>
      {Object.entries(filters).map(
        ([key, value]) =>
          value?.length > 0 &&
          value.map((elem, index) => (
            <li className={styles.filter} key={index}>
              <span className={styles.filterText}>{elem}</span>
              <img
                className={styles.iconRemove}
                src={iconRemove}
                alt="Remove"
                onClick={handleFiltersClick.bind(null, key, elem)}
              />
            </li>
          ))
      )}
    </ul>
  );
}

export default Filters;
