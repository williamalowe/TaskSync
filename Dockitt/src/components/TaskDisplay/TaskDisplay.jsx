import { useContext } from 'react';
import { TaskContext } from '../../views/App/App';
import styles from './TaskDisplay.module.css';

const TaskDisplay = () => {
  const { tasks } = useContext(TaskContext)

  return (
    <div className={styles.border}>
      <table className={styles.table}>
        <thead className={styles.headers}>
          <tr>
            <th>Date</th>
            <th>Task</th>
            <th>Description</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody className={styles.body}>
          {
            tasks.map((task) => 
            <tr 
              key={task.date}
              className={styles.task}
            >
              <th>{task.date}</th>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td>{task.priority}</td>
            </tr>
            )
         }
        </tbody>
      </table>
    </div>
  )
}

export default TaskDisplay