import TaskCard from '../TaskCard/TaskCard';
import styles from './CardContainer.module.css';

const CardContainer = ({ title, taskData, handleClick, type }) => {

  return (
    <section className={styles.container}>
      <h3>{title}</h3>
      {
        type === "singular" ?
          <div className={styles.singular}>
          {
            taskData.map((task) => 
              <TaskCard 
                key={task.id}
                taskTitle={task.task}
                taskDesc={task.description}
                taskPriority={task.priority}
                taskStatus={task.status}
                handleClick={() => handleClick(task.id)}
              />
            )
          }
        </div>
        :
        <div className={styles.cards}>
        {
          taskData.map((task) => 
            <TaskCard 
              key={task.id}
              taskTitle={task.task}
              taskDesc={task.description}
              taskPriority={task.priority}
              taskStatus={task.status}
              handleClick={() => handleClick(task.id)}
            />
          )
        }
      </div>
      }
      
    </section>
  )
}

export default CardContainer
