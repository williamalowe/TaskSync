import React from 'react'
import styles from './Tasks.module.css';
import TaskNav from '../../components/TaskNav/TaskNav';
import TaskDisplay from '../../components/TaskDisplay/TaskDisplay';

const Tasks = () => {
  return (
    <section className={styles.tasks}>
      <h3>Welcome back.</h3>
      <p>Here&apos;s your list of tasks.</p>
      <div className={styles.content}>
        <TaskNav />
        <TaskDisplay />
      </div>
    </section>
  )
}

export default Tasks
