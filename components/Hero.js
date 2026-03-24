'use client';

import styles from './Hero.module.css';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentSkills = ['Python', 'OpenAI API', 'Flask', 'Prompt Engineering', 'Git/GitHub'];
  const bilingualSkill = 'Bilingual EN/ES';
  const comingSoonSkills = ['LangChain', 'FastAPI', 'AWS', 'Pinecone'];

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            {/* Badge */}
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              <span>OPEN TO WORK</span>
              <span className={styles.badgeSeparator}>·</span>
              <span>EN / ES</span>
            </div>

            {/* Heading */}
            <h1 className={styles.heading}>
              <span>AI Tools</span>
              <br />
              <span className={styles.headingBlue}>Specialist.</span>
            </h1>

            {/* Subtitle */}
            <p className={styles.subtitle}>
              PYTHON · OPENAI · FLASK · AWS
            </p>

            {/* Bio */}
            <p className={styles.bio}>
              I build AI-powered apps that bridge language and technology. Based in California, 
              shipping real tools with a bias toward getting things done.
            </p>

            {/* Skills */}
            <div className={styles.skills}>
              {currentSkills.map((skill) => (
                <span key={skill} className={`${styles.pill} ${styles.pillBlue}`}>
                  {skill}
                </span>
              ))}
              <span className={`${styles.pill} ${styles.pillYellow}`}>
                {bilingualSkill}
              </span>
              {comingSoonSkills.map((skill) => (
                <span key={skill} className={`${styles.pill} ${styles.pillOutline}`}>
                  {skill}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className={styles.buttons}>
              <button onClick={scrollToProjects} className={styles.btnPrimary}>
                View my work
              </button>
              <a 
                href="https://github.com/fernandojosecc" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.btnOutline}
              >
                GitHub →
              </a>
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <div className={styles.rightColumn}>
            <div className={styles.statsCard}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1</span>
                <span className={styles.statLabel}>APP IN PRODUCTION</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>2</span>
                <span className={styles.statLabel}>LANGUAGES</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>3</span>
                <span className={styles.statLabel}>PROJECTS PLANNED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
