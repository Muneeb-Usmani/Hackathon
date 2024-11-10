// app/visionary/page.jsx
import styles from './Visionary.module.css';

export default function Visionary() {
  return (
    <section className={styles.visionary}>
      <h2 className={styles.sectionTitle}>Our Visionary Approach</h2>
      <p className={styles.sectionSubtitle}>
        Our vision is to empower businesses with innovative strategies to help them achieve sustainable growth and success.
      </p>
      <div className={styles.visionList}>
        <div className={styles.visionItem}>
          <h3>Innovation</h3>
          <p>We bring creative solutions to complex problems to foster business transformation.</p>
        </div>
        <div className={styles.visionItem}>
          <h3>Excellence</h3>
          <p>Striving for excellence in everything we do, aiming for the highest standards.</p>
        </div>
        <div className={styles.visionItem}>
          <h3>Integrity</h3>
          <p>Our core values drive ethical and transparent business practices.</p>
        </div>
      </div>
    </section>
  );
}
