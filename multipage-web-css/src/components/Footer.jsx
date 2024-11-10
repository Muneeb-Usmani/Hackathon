// app/footer/page.jsx
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>Elevation for bright future</p>
      <p className={styles.footerInfo}>548, Jeddah - Saudi Arabia | hello@ethkaa.com</p>
      <nav className={styles.footerNav}>
        <a href="#contact" className={styles.footerLink}>Contact Us</a> | 
        <a href="#services" className={styles.footerLink}>Our Services</a> | 
        <a href="#home" className={styles.footerLink}>Homepage</a>
      </nav>
      <p className={styles.copyright}>&copy; Powered By Ethkaa</p>
    </footer>
  );
}
