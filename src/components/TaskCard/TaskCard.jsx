import styles from './TaskCard.module.css';

const TaskCard = ({ taskTitle, taskDesc, taskPriority, taskStatus, handleClick }) => {
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
          taskStatus !== "completed" ? <button onClick={handleClick}>Push</button> : <button onClick={handleClick}>Remove</button>

        }
      </div>
    </div>
  )
};

export default TaskCard;