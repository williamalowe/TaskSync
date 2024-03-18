import { useState } from 'react';
import styles from './Workspace.module.css';
import HeaderBar from '../../components/Headerbar/HeaderBar';
import Navbar from '../../components/Navbar/Navbar';
import CardContainer from '../../components/CardContainer/CardContainer';

const Workspace = () => {
  // test data
  const [taskData, setTaskData] = useState([
    {
      "task": "Fix responsive layout",
      "description": "Optimize and adjust the website layout for different screen sizes",
      "priority": "High",
      "status": "backlog"
    },
    {
      "task": "Implement new feature",
      "description": "Add a new functionality to the website as per the requirements",
      "priority": "Medium",
      "status": "backlog"
    },
    {
      "task": "Debug JavaScript code",
      "description": "Identify and fix any bugs or errors in the JavaScript code",
      "priority": "High",
      "status": "backlog"
    },
    {
      "task": "Optimize page load time",
      "description": "Improve the performance of the website by reducing the page load time",
      "priority": "High",
      "status": "backlog"
    },
    {
      "task": "Refactor CSS code",
      "description": "Clean up and organize the CSS code for better maintainability",
      "priority": "Low",
      "status": "backlog"
    },
    {
      "task": "Test cross-browser compatibility",
      "description": "Ensure that the website works correctly on different web browsers",
      "priority": "Medium",
      "status": "backlog"
    },
    {
      "task": "Update documentation",
      "description": "Document any changes or additions made to the code for future reference",
      "priority": "Low",
      "status": "completed"
    },
    {
      "task": "Collaborate with UI/UX designer",
      "description": "Work closely with the designer to implement the desired user interface",
      "priority": "Medium",
      "status": "inProgress"
    },
    {
      "task": "Fix broken links",
      "description": "Identify and repair any broken links on the website",
      "priority": "Low",
      "status": "underReview"
    },
    {
      "task": "Optimize image assets",
      "description": "Compress and resize images to improve website performance",
      "priority": "Medium",
      "status": "completed"
    }
  ]);

  return (
      <main className={styles.workspace}>
        <HeaderBar />
        <section className={styles.panel}>
          <Navbar />
          <div className={styles.cardContainers}>
            <CardContainer 
              title="Backlog"
              taskData={taskData.filter((item) => item.status === "backlog")}
            />
            <CardContainer 
              title="In Progress"
              taskData={taskData.filter((item) => item.status === "inProgress")}
            />
            <CardContainer 
              title="Under Review"
              taskData={taskData.filter((item) => item.status === "underReview")}
            />
            <CardContainer 
              title="Completed"
              taskData={taskData.filter((item) => item.status === "completed")}
            />
          </div>
        </section>
      </main>
  )
}

export default Workspace
