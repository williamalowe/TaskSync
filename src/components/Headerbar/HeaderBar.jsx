import styles from './HeaderBar.module.css';

const HeaderBar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <h3>TaskSync</h3>
      </div>
      <div className={styles.right}>
        Developed by William Lowe | 2024
      </div>
    </div>
  )
};
export default HeaderBar;