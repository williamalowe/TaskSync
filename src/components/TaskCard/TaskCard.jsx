import styles from './TaskCard.module.css';

const TaskCard = ({ taskTitle, taskDesc, taskPriority, taskStatus }) => {
  return (
    <div className={styles.card}>
      <div className={styles.upper}>
        {taskTitle}
      </div>
      <div className={styles.middle}>
        {taskDesc}
      </div>
      <div className={styles.lower}>
        <div className={styles.priority}>Priority: {taskPriority}</div>
        {
          taskStatus !== "completed" ? <button>Push</button> : <button>Remove</button>

        }
      </div>
    </div>
  )
};

export default TaskCard;