import TaskCard from '../TaskCard/TaskCard';
import styles from './CardContainer.module.css';

const CardContainer = ({ title }) => {
  return (
    <section className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.cards}>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        {/* Cards here */}
      </div>
    </section>
  )
}

export default CardContainer
