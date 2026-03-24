import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className={styles.title}>Let&apos;s work together</h2>
        <p className={styles.subtitle}>
          Open to AI tools, technical support, and implementation roles.
        </p>
        
        <div className={styles.buttons}>
          <a 
            href="mailto:fernandorodasc1@gmail.com"
            className={styles.contactBtn}
          >
            Email me
          </a>
          <a 
            href="https://www.linkedin.com/in/fernandojosecontreras/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/fernandojosecc"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
