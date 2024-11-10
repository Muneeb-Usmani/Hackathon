import styles from './Value.module.css';

export default function ValueDelivered() {
  return (
    <section className={styles.valueDelivered}>
      <h2 className={styles.sectionTitle}>Value Delivered</h2>
      <p className={styles.sectionSubtitle}>
      Our commitment to excellence drives tangible results for our clients, ensuring success and satisfaction worldwide.
      </p>
      <div className={styles.valueList}>
        <div className={styles.valueItem}>
          <h3>87%</h3>
          <p>Success Rate</p>
        </div>
        <div className={styles.valueItem}>
          <h3>Happy Customers</h3>
          <p>Satisfied Clients</p>
        </div>
        <div className={styles.valueItem}>
          <h3>+45 Business</h3>
          <p>Clients Worldwide</p>
        </div>
      </div>
    </section>
  );
}
