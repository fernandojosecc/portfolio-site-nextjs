'use client';

import styles from './Navbar.module.css';

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContent}>
          <a href="#" className={styles.logo}>
            Fernando <span className={styles.logoC}>C</span>
            <span className={styles.logoDot}>.</span>
          </a>
          <div className={styles.navLinks}>
            <button onClick={() => scrollToSection('projects')} className={styles.navLink}>
              work
            </button>
            <button onClick={() => scrollToSection('about')} className={styles.navLink}>
              about
            </button>
            <button onClick={() => scrollToSection('contact')} className={styles.navLink}>
              contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
