import styles from './case-filter.module.scss';

export function CasesFilter() {
  return (
    <ul className={styles.grid} role="list">
      <li className={styles.checked}>Сайты</li>
      <li>Брендинг</li>
      <li>Приложения</li>
      <li>Графический дизайн</li>
    </ul>
  );
}
