import styles from './Filters.module.css';
import iconRemove from '../../images/icon-remove.svg';

function Filters({ filters, removeFilter }) {
  return (
    <ul className={styles.filters}>
      {filters.map((filter, index) => (
        <li className={styles.filter} key={index}>
          <span className={styles.filterText}>{filter}</span>
          <img className={styles.iconRemove} src={iconRemove} alt="Remove" />
        </li>
      ))}
    </ul>
  );
}

export default Filters;
