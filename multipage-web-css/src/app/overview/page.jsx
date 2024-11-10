import styles from './Overview.module.css';
import Image from 'next/image';

export default function Overview() {
  return (
    <section className={styles.overview}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/road.png" 
          alt="Highway"
          layout="fill"
          objectFit="cover"
          className={styles.backgroundImage}
        />
        <div className={styles.textOverlay}>
          <h2 className={styles.sectionTitle}>Who We Are</h2>
          <p className={styles.sectionDescription}>
            Ethkaa is a leading consulting firm based in Saudi Arabia, dedicated to providing innovative and tailored solutions to businesses across the region. With a deep understanding of the local market and a commitment to excellence, Ethkaa helps organizations navigate complex challenges and achieve sustainable growth.
          </p>
          <p className={styles.sectionDescription}>
            Our team of experienced consultants offers expertise in various industries, ensuring that our clients receive the strategic insights and support they need to succeed in an ever-evolving business landscape.
          </p>
        </div>
      </div>
    </section>
  );
}
