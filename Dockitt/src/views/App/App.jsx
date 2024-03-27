import { Outlet } from 'react-router-dom';
import { useState, createContext } from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import styles from './App.module.css';

export const TaskContext = createContext({
  // tasks: [],
  // addTask: () => {},
});

const App = () => {
  const [tasks, setTasks] = useState([
    {
      "name": "Fix bug in login page",
      "date": "1635724800",
      "description": "There is an issue with the login functionality, need to investigate and fix it",
      "priority": "high",
      "status": "in progress"
    },
    {
      "name": "Optimize website performance",
      "date": "1635811200",
      "description": "The website is loading slowly, need to identify and implement performance improvements",
      "priority": "medium",
      "status": "backlog"
    },
    {
      "name": "Refactor CSS code",
      "date": "1635897600",
      "description": "The CSS codebase needs to be cleaned up and organized for better maintainability",
      "priority": "low",
      "status": "backlog"
    },
    {
      "name": "Implement new feature",
      "date": "1635984000",
      "description": "Add a search functionality to the website",
      "priority": "medium",
      "status": "under review"
    },
    {
      "name": "Fix responsive layout",
      "date": "1636070400",
      "description": "The website layout is not displaying correctly on mobile devices, need to fix it",
      "priority": "high",
      "status": "backlog"
    },
    {
      "name": "Update dependencies",
      "date": "1636156800",
      "description": "Some of the project dependencies are outdated, need to update them to the latest versions",
      "priority": "low",
      "status": "backlog"
    },
    {
      "name": "Write unit tests",
      "date": "1636243200",
      "description": "Add unit tests to ensure the stability and correctness of the codebase",
      "priority": "medium",
      "status": "completed"
    },
    {
      "name": "Improve accessibility",
      "date": "1636329600",
      "description": "Make the website more accessible for users with disabilities",
      "priority": "high",
      "status": "backlog"
    },
    {
      "name": "Fix broken links",
      "date": "1636416000",
      "description": "There are several broken links on the website, need to find and fix them",
      "priority": "medium",
      "status": "completed"
    },
    {
      "name": "Update documentation",
      "date": "1636502400",
      "description": "The project documentation is outdated, need to review and update it",
      "priority": "low",
      "status": "cancelled"
    },
    {
      "name": "Remove depricated features",
      "date": "1636502465",
      "description": "Depreciated fxLayout library needs to be replaced",
      "priority": "high",
      "status": "under review"
    }
  ]);
  const addTask = () => {
    // 
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      <main className={styles.app}>
        <Header />
        <Navbar />
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
    </TaskContext.Provider>
    
  )
}

export default App
