import styles from './Services.module.css';
import Image from 'next/image';

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.serviceContent}>
        <div className={styles.leftSection}>
          <h2 className={styles.sectionTitle}>High-impact services</h2>
          <p className={styles.sectionSubtitle}>
          Our expert team delivers tailored solutions to help businesses thrive and achieve their strategic goals.
          </p>
          <Image
  src="/images/service-icon.png"
  alt="Consulting Icon"
  width={190}  
  height={280} 
/>

        </div>
        <div className={styles.serviceList}>
          <div className={styles.serviceItem}>
            <div className={styles.serviceNumber}>1</div>
            <h3 className={styles.serviceTitle}>Process Development</h3>
            <p className={styles.serviceDescription}>Streamlining operations to enhance productivity and ensure seamless workflows.</p>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceNumber}>2</div>
            <h3 className={styles.serviceTitle}>Process Development</h3>
            <p className={styles.serviceDescription}>Transforming data insights into actionable strategies for continuous improvement.</p>
          </div>
          <div className={styles.serviceItem}>
            <div className={styles.serviceNumber}>3</div>
            <h3 className={styles.serviceTitle}>Quality Assurance</h3>
            <p className={styles.serviceDescription}>Ensuring high standards across all processes to meet and exceed client expectations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
