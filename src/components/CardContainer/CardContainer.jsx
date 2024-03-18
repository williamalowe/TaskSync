import TaskCard from '../TaskCard/TaskCard';
import styles from './CardContainer.module.css';

const CardContainer = ({ title, taskData }) => {

  console.log(taskData)

  return (
    <section className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.cards}>
        {
          taskData.map((task, i) => 
            <TaskCard 
              key={i}
              taskTitle={task.task}
              taskDesc={task.description}
              taskPriority={task.priority}
            />
          )
        }
      </div>
    </section>
  )
}

export default CardContainer
