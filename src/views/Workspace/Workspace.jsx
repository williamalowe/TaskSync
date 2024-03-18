import { useState } from 'react';
import styles from './Workspace.module.css';
import HeaderBar from '../../components/Headerbar/HeaderBar';
import Navbar from '../../components/Navbar/Navbar';
import CardContainer from '../../components/CardContainer/CardContainer';

const Workspace = () => {
  // test data
  const [taskData, setTaskData] = useState([
    {
      "id": "001",
      "task": "Fix responsive layout",
      "description": "Optimize and adjust the website layout for different screen sizes",
      "priority": "High",
      "status": "backlog"
    },
    {
      "id": "002",
      "task": "Implement new feature",
      "description": "Add a new functionality to the website as per the requirements",
      "priority": "Medium",
      "status": "backlog"
    },
    {
      "id": "003",
      "task": "Debug JavaScript code",
      "description": "Identify and fix any bugs or errors in the JavaScript code",
      "priority": "High",
      "status": "backlog"
    },
    {
      "id": "004",
      "task": "Optimize page load time",
      "description": "Improve the performance of the website by reducing the page load time",
      "priority": "High",
      "status": "backlog"
    },
    {
      "id": "005",
      "task": "Refactor CSS code",
      "description": "Clean up and organize the CSS code for better maintainability",
      "priority": "Low",
      "status": "backlog"
    },
    {
      "id": "006",
      "task": "Test cross-browser compatibility",
      "description": "Ensure that the website works correctly on different web browsers",
      "priority": "Medium",
      "status": "backlog"
    },
    {
      "id": "007",
      "task": "Update documentation",
      "description": "Document any changes or additions made to the code for future reference",
      "priority": "Low",
      "status": "completed"
    },
    {
      "id": "008",
      "task": "Collaborate with UI/UX designer",
      "description": "Work closely with the designer to implement the desired user interface",
      "priority": "Medium",
      "status": "inProgress"
    },
    {
      "id": "009",
      "task": "Fix broken links",
      "description": "Identify and repair any broken links on the website",
      "priority": "Low",
      "status": "underReview"
    },
    {
      "id": "010",
      "task": "Optimize image assets",
      "description": "Compress and resize images to improve website performance",
      "priority": "Medium",
      "status": "completed"
    }
  ]);

  const updateTaskStatus = (id) => {
    // assign temp updated val
    let updatedValue = {};
    for (let i = 0; i < taskData.length; i++) {
      if (taskData[i].id === id) {
        updatedValue = taskData[i]
      }
    }
    // copy dataset excluding target
    let updatedList = taskData.filter((task) => task.id !== updatedValue.id);
    // updated target status || remove if already completed
    if (updatedValue.status !== "completed") {
      if (updatedValue.status === "backlog") {
        updatedValue.status = "inProgress"
      } else if (updatedValue.status === "inProgress") {
        updatedValue.status = "underReview"
      } else if (updatedValue.status === "underReview") {
        updatedValue.status = "completed"
      }
      setTaskData([...updatedList, updatedValue]);
    } else {
      setTaskData([...updatedList]);
    }
  };

  return (
      <main className={styles.workspace}>
        <HeaderBar />
        <section className={styles.panel}>
          <Navbar />
          <div className={styles.cardContainers}>
            <CardContainer 
              title="Backlog"
              taskData={taskData.filter((item) => item.status === "backlog")}
              handleClick={updateTaskStatus}
            />
            <CardContainer 
              title="In Progress"
              taskData={taskData.filter((item) => item.status === "inProgress")}
              handleClick={updateTaskStatus}
            />
            <CardContainer 
              title="Under Review"
              taskData={taskData.filter((item) => item.status === "underReview")}
              handleClick={updateTaskStatus}
            />
            <CardContainer 
              title="Completed"
              taskData={taskData.filter((item) => item.status === "completed")}
              handleClick={updateTaskStatus}
            />
          </div>
        </section>
      </main>
  )
}

export default Workspace
