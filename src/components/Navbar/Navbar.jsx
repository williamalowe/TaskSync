import styles from './Navbar.module.css';

const Navbar = ({ handleOpenModal, handleToggleCards }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <button to="./">Tasks</button> &gt;
        <button to="./dashboard">Dashboard</button>
      </div>
      <div className={styles.right}>
        <button onClick={() => handleToggleCards(0)}>All</button>
        <button onClick={() => handleToggleCards(1)}>Backlog</button>
        <button onClick={() => handleToggleCards(2)}>In Progress</button>
        <button onClick={() => handleToggleCards(3)}>Under Review</button>
        <button onClick={() => handleToggleCards(4)}>Completed</button> <span>|</span>
        <button onClick={handleOpenModal}>Add Task</button>
      </div>
    </nav>
  )
}

export default Navbar
