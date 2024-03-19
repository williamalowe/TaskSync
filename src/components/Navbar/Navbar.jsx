import styles from './Navbar.module.css';

const Navbar = ({ handleOpenModal }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <button to="./">Tasks</button> &gt;
        <button to="./dashboard">Dashboard</button>
      </div>
      <div className={styles.right}>
        <button>All</button>
        <button>Backlog</button>
        <button>In Progress</button>
        <button>Under Review</button>
        <button>Completed</button> <span>|</span>
        <button onClick={handleOpenModal}>Add Task</button>
      </div>
    </nav>
  )
}

export default Navbar
