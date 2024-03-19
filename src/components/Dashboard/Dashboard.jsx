import styles from './Dashboard.module.css';

const Dashboard = ({ taskData }) => {
  let backlogTasks = taskData.filter((task) => task.status === "backlog");
  let inProgressTasks = taskData.filter((task) => task.status === "inProgress");
  let underReviewTasks = taskData.filter((task) => task.status === "underReview");
  let completedTasks = taskData.filter((task) => task.status === "completed");

  let backlogPercent = Math.floor(backlogTasks.length / taskData.length * 100);
  let inProgressPercent = Math.floor(inProgressTasks.length / taskData.length * 100);
  let underReviewPercent = Math.floor(underReviewTasks.length / taskData.length * 100);
  let completedPercent = Math.floor(completedTasks.length / taskData.length * 100);

  return (
    <section className={styles.dashboard}>
      <div className={styles.header}>Dashboard</div>
      <div className={styles.content}>
        <div className={styles.upper}>
          <div className={styles.upperContainer}>
            <div className={styles.title}>Total Tasks</div>
            <div className={styles.taskNum}>{taskData.length}</div>
            <div className={styles.percentage}>{Math.floor(taskData.length / taskData.length * 100)}% of All Tasks</div>
          </div>
          <div className={styles.upperContainer}>
            <div className={styles.title}>Backlog</div>
            <div className={styles.taskNum}>{backlogTasks.length}</div>
            <div className={styles.percentage}>{backlogPercent}% of All Tasks</div>
          </div>
          <div className={styles.upperContainer}>
            <div className={styles.title}>In Progress</div>
            <div className={styles.taskNum}>{inProgressTasks.length}</div>
            <div className={styles.percentage}>{inProgressPercent}% of All Tasks</div>
          </div>
          <div className={styles.upperContainer}>
            <div className={styles.title}>Under Review</div>
            <div className={styles.taskNum}>{underReviewTasks.length}</div>
            <div className={styles.percentage}>{underReviewPercent}% of All Tasks</div>
          </div>
          <div className={styles.upperContainer}>
            <div className={styles.title}>Completed</div>
            <div className={styles.taskNum}>{completedTasks.length}</div>
            <div className={styles.percentage}>{completedPercent}% of All Tasks</div>
          </div>
        </div>
        <div className={styles.lower}>
          <div className={styles.left}>
            <div className={styles.barContainer}>
              <div className={styles.barTitle}>All Tasks</div>
              <div className={styles.bar} style={{width: 100 + '%'}}></div>
            </div>
            <div className={styles.barContainer}>
              <div className={styles.barTitle}>Backlog</div>
              <div className={styles.backlogBar} style={{width: backlogPercent + '%'}}></div>
            </div>
            <div className={styles.barContainer}>
              <div className={styles.barTitle}>In Progress</div>
              <div className={styles.inProgressBar} style={{width: inProgressPercent + '%'}}></div>
            </div>
            <div className={styles.barContainer}>
              <div className={styles.barTitle}>Under Review</div>
              <div className={styles.underReviewBar} style={{width: underReviewPercent + '%'}}></div>
            </div>
            <div className={styles.barContainer}>
              <div className={styles.barTitle}>Completed</div>
              <div className={styles.completedBar} style={{width: completedPercent + '%'}}></div>
            </div>
            <div className={styles.barContainer}>
              <div className={styles.barTitle}>Total</div>
              <div className={styles.backlogBar} style={{width: backlogPercent + '%'}}></div>
              <div className={styles.inProgressBar} style={{width: inProgressPercent + '%'}}></div>
              <div className={styles.underReviewBar} style={{width: underReviewPercent + '%'}}></div>
              <div className={styles.completedBar} style={{width: completedPercent + '%'}}></div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.pie}
              style={{backgroundImage: `conic-gradient(#ff2020 ${backlogPercent}%, #2024ff ${backlogPercent}%, #2024ff ${backlogPercent + inProgressPercent}%,  #ffc320 ${backlogPercent + inProgressPercent}%, #ffc320 ${backlogPercent + inProgressPercent + underReviewPercent}%, #20ff3e ${backlogPercent + inProgressPercent + underReviewPercent}%)`}}
            >
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
