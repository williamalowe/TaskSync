import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <NavLink>Tasks</NavLink> &gt;
        <NavLink>Dashboard</NavLink>
      </div>
      <div className={styles.right}>
        <NavLink>All</NavLink>
        <NavLink>Backlog</NavLink>
        <NavLink>In Progress</NavLink>
        <NavLink>Under Review</NavLink>
        <NavLink>Completed</NavLink> <span>|</span>
        <NavLink>Add Task</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
