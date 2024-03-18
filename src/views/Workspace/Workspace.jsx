import styles from './Workspace.module.css';
import HeaderBar from '../../components/Headerbar/HeaderBar';

const Workspace = () => {
  return (
    <main className={styles.workspace}>
      <HeaderBar />
      <section className={styles.panel}>
        {/* Content here */}
      </section>
    </main>
  )
}

export default Workspace
