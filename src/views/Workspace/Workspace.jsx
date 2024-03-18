import styles from './Workspace.module.css';
import HeaderBar from '../../components/Headerbar/HeaderBar';
import Navbar from '../../components/Navbar/Navbar';
import CardContainer from '../../components/CardContainer/CardContainer';

const Workspace = () => {
  return (
    <main className={styles.workspace}>
      <HeaderBar />
      <section className={styles.panel}>
        <Navbar />
        <div className={styles.cardContainers}>
          <CardContainer 
            title="Backlog"
          />
          <CardContainer 
            title="In Progress"
          />
          <CardContainer 
            title="Under Review"
          />
          <CardContainer 
            title="Completed"
          />
          {/* Content here */}

        </div>
      </section>
    </main>
  )
}

export default Workspace
