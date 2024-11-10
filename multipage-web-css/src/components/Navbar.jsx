import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Homepage</Link>
      <Link href="/services">Our Services</Link>
      <Link href="/value">Value</Link>
      <Link href="/visionary">Visionary</Link>
      <Link href="/overview">Overview</Link>
      <button className={styles.ctaButton}>Start Your Journey with Ethkaa</button>
    </nav>
  );
}
