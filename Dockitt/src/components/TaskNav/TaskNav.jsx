import styles from './TaskNav.module.css';

const TaskNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.tab}>View All</div>
      <div className={styles.tab}>Backlog</div>
      <div className={styles.tab}>In Progress</div>
      <div className={styles.tab}>Under Review</div>
      <div className={styles.tab}>Completed</div>
      <div className={styles.tab}>Cancelled</div>
    </nav>
  )
}

export default TaskNav
