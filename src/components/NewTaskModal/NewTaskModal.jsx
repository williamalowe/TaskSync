import styles from './NewTaskModal.module.css';

const NewTaskModal = ({ handleClose, handleSubmit }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <h3>Add New Task</h3>
        <div className={styles.form}>
          <div className={styles.left}>
            <div className={styles.formItem}>
              <input type="text" id="taskNameInput" className={styles.textInput} placeholder='Task Name' required/>
            </div>
            <div className={styles.formItem}>
              <label className={styles.radioHeader}>Priority:</label> <br />
              <input type="radio" name="taskPriorityInput" id="low-priority" className={styles.radio}/> 
              <label htmlFor="">Low</label> <br />
              <input type="radio" name="taskPriorityInput" id="medium-priority" className={styles.radio}/> 
              <label htmlFor="">Medium</label> <br />
              <input type="radio" name="taskPriorityInput" id="high-priority" className={styles.radio}/> 
              <label htmlFor="">High</label> <br />
            </div>
            <div className={styles.formItem}>
              <label className={styles.radioHeader}>Status:</label> <br />
              <input type="radio" name="taskStatusInput" id="backlog-status" className={styles.radio}/> 
              <label htmlFor="">Backlog</label> <br />
              <input type="radio" name="taskStatusInput" id="inProgress-status" className={styles.radio}/> 
              <label htmlFor="">In Progress</label> <br />
              <input type="radio" name="taskStatusInput" id="underReview-status" className={styles.radio}/> 
              <label htmlFor="">Under Review</label> <br />
              <input type="radio" name="taskStatusInput" id="completed-status" className={styles.radio}/> 
              <label htmlFor="">Completed</label> <br />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.formItem}>
              <label className={styles.radioHeader}>Task Description:</label> <br />
              <textarea name="taskDescriptionInput" id="taskDescriptionInput" cols="30" rows="10"></textarea>
            </div>
            <button onClick={handleClose}>Close</button>
            <button onClick={handleSubmit}>Add Task</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewTaskModal
