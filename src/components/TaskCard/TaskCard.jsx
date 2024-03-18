import styles from './TaskCard.module.css';

const TaskCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.upper}>
        Task Example Title
      </div>
      <div className={styles.middle}>
      Task Example Description Task Example Description Task Example Description Task Example Description Task Example Description Task Example Description Task Example Description Task Example Description
      </div>
      <div className={styles.lower}>
        <div className={styles.priority}>Priority: Medium</div>
        <button>Push</button>
      </div>
    </div>
  )
};

export default TaskCard;