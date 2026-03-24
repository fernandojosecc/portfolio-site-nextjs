import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            fernandocontreras.dev · 2025
          </div>
          <div className={styles.footerRight}>
            <span className={styles.building}>building</span>
            <span className={styles.inPublic}>in public</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
