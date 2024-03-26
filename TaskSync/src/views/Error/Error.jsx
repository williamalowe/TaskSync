import { NavLink } from "react-router-dom";
import styles from './Error.module.css';



const Error = () => {
  return (
    <main className={styles.error}>
      <div className={styles.content}>
        <h1><span className={styles.title}>Oops!</span> Something&apos;s gone wrong.</h1>
        <h3>
          Click 
          <NavLink to="/workspace"> here </NavLink>
          to go back, and we&apos;ll give our dev a smack!
        </h3>
      </div>
    </main>
  )
}

export default Error
