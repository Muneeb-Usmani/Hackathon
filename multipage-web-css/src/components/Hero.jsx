import React from 'react'
import styles from "./Hero.module.css";
const Hero = () => {
  return (
<section className={styles.hero}>
      <h1 className={styles.heroTitle}>Get in Touch with Ethkaa Experts</h1>
      <p className={styles.heroSubtitle}>
        Our team is ready to provide the guidance and solutions you need. Reach out today to start a conversation.
      </p>
      <button className={styles.heroButton}>Start Your Journey with Ethkaa - Free Consultation!</button>
    </section>
)
}

export default Hero