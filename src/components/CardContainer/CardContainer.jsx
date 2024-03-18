import styles from './CardContainer.module.css';

const CardContainer = ({ title }) => {
  return (
    <section className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.cards}>
        {/* Cards here */}
      </div>
    </section>
  )
}

export default CardContainer
