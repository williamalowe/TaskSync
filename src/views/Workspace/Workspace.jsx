import styles from './Workspace.module.css';
import HeaderBar from '../../components/Headerbar/HeaderBar';
import Navbar from '../../components/Navbar/Navbar';

const Workspace = () => {
  return (
    <main className={styles.workspace}>
      <HeaderBar />
      <section className={styles.panel}>
        <Navbar />
        {/* Content here */}
      </section>
    </main>
  )
}

export default Workspace
