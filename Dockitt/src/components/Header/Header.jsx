import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <h3>Dockitt</h3>
      </div>
      <div className={styles.right}>
        <h5>William A Lowe | 2024</h5>
      </div>
    </div>
  )
}

export default Header
