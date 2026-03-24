import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className={styles.sectionTitle}>About me</h2>
        
        <p className={styles.bio}>
          I'm Fernando Contreras, an AI Tools Specialist based in California. I specialize in building 
          AI-powered applications that bridge the gap between language and technology. With a strong 
          foundation in Python and modern AI frameworks, I focus on shipping practical tools that solve 
          real problems.
        </p>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>25+</span>
            <span className={styles.statLabel}>Certifications</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>3 yrs</span>
            <span className={styles.statLabel}>Experience</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>2</span>
            <span className={styles.statLabel}>Languages</span>
          </div>
        </div>
      </div>
    </section>
  );
}
