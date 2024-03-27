import styles from './TaskDisplay.module.css';

const TaskDisplay = () => {
  const testData = [
    {
      "Task": "Fix bug in login page",
      "Date": "1635724800",
      "Description": "There is an issue with the login functionality, need to investigate and fix it",
      "Priority": "high",
      "Status": "in progress"
    },
    {
      "Task": "Optimize website performance",
      "Date": "1635811200",
      "Description": "The website is loading slowly, need to identify and implement performance improvements",
      "Priority": "medium",
      "Status": "backlog"
    },
    {
      "Task": "Refactor CSS code",
      "Date": "1635897600",
      "Description": "The CSS codebase needs to be cleaned up and organized for better maintainability",
      "Priority": "low",
      "Status": "backlog"
    },
    {
      "Task": "Implement new feature",
      "Date": "1635984000",
      "Description": "Add a search functionality to the website",
      "Priority": "medium",
      "Status": "under review"
    },
    {
      "Task": "Fix responsive layout",
      "Date": "1636070400",
      "Description": "The website layout is not displaying correctly on mobile devices, need to fix it",
      "Priority": "high",
      "Status": "backlog"
    },
    {
      "Task": "Update dependencies",
      "Date": "1636156800",
      "Description": "Some of the project dependencies are outdated, need to update them to the latest versions",
      "Priority": "low",
      "Status": "backlog"
    },
    {
      "Task": "Write unit tests",
      "Date": "1636243200",
      "Description": "Add unit tests to ensure the stability and correctness of the codebase",
      "Priority": "medium",
      "Status": "completed"
    },
    {
      "Task": "Improve accessibility",
      "Date": "1636329600",
      "Description": "Make the website more accessible for users with disabilities",
      "Priority": "high",
      "Status": "backlog"
    },
    {
      "Task": "Fix broken links",
      "Date": "1636416000",
      "Description": "There are several broken links on the website, need to find and fix them",
      "Priority": "medium",
      "Status": "completed"
    },
    {
      "Task": "Update documentation",
      "Date": "1636502400",
      "Description": "The project documentation is outdated, need to review and update it",
      "Priority": "low",
      "Status": "cancelled"
    }
  ]

  return (
    <div className={styles.border}>
      <table className={styles.table}>
        <tr>
          <th>Date</th>
          <th>Task</th>
          <th>Title</th>
          <th>Status</th>
          <th>Priority</th>
        </tr>
        {/* output */}
          {
            testData.map((task) => 
              <tbody className={styles.task} key={task.Date}>
                <td>{task.Date}</td>
                <td>{task.Task}</td>
                <td>{task.Description}</td>
                <td>{task.Status}</td>
                <td>{task.Priority}</td>
              </tbody>
            )
          }
      </table>
    </div>
  )
}

export default TaskDisplay