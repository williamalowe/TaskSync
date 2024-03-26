import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import styles from './App.module.css';

const App = () => {
  return (
    <main className={styles.app}>
      <Header />
      <Navbar />
      <div className={styles.content}>
        <Outlet />
      </div>
    </main>
  )
}

export default App
