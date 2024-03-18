import { NavLink } from 'react-router-dom'
import styles from './Welcome.module.css'

function Welcome() {
  return (
    <main className={styles.welcome}>
      <div className={styles.content}>
        <h1>Welcome to <span className={styles.title}>TaskSync</span>.</h1>
        <h3>
          Click 
          <NavLink> here </NavLink>
          to start working.
        </h3>
      </div>
    </main>
  )
}

export default Welcome
