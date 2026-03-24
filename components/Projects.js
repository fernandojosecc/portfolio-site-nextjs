import styles from './Projects.module.css';

const projects = [
  {
    id: '01',
    title: 'Bilingual AI Chatbot',
    description: 'Conversational AI that responds in both English and Spanish. Built with Python, Flask, and the OpenAI API. Fully deployed and accessible to anyone.',
    stack: ['Python', 'Flask', 'OpenAI', 'Railway'],
    status: 'LIVE',
    liveUrl: 'https://web-production-a3065.up.railway.app',
    githubUrl: 'https://github.com/fernandojosecc/bilingual-chatbot',
    featured: true,
  },
  {
    id: '02',
    title: 'RAG Document Assistant',
    description: 'Upload any PDF and chat with it. Powered by LangChain and vector search.',
    stack: ['LangChain', 'Pinecone', 'FastAPI'],
    status: 'COMING SOON',
    featured: false,
  },
  {
    id: '03',
    title: 'AI Operations Agent',
    description: 'Autonomous agent that solves real operations problems using tool-use.',
    stack: ['Agents', 'AWS', 'FastAPI'],
    status: 'COMING SOON',
    featured: false,
  },
];

export default function Projects() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <a 
            href="https://github.com/fernandojosecc" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.viewAllLink}
          >
            view all on github →
          </a>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div className={styles.featuredCard}>
            <div className={styles.featuredBorder}></div>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.projectMeta}>
                  <span className={styles.projectId}>PROJECT {featuredProject.id}</span>
                </div>
                <span className={styles.statusBadge}>{featuredProject.status}</span>
              </div>
              <h3 className={styles.projectTitle}>{featuredProject.title}</h3>
              <p className={styles.projectDescription}>{featuredProject.description}</p>
              <div className={styles.projectStack}>
                {featuredProject.stack.map((tech) => (
                  <span key={tech} className={styles.stackItem}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                {featuredProject.liveUrl && (
                  <a 
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    Live Demo →
                  </a>
                )}
                {featuredProject.githubUrl && (
                  <a 
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLinkSecondary}
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className={styles.projectsGrid}>
          {otherProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectId}>PROJECT {project.id}</span>
                    <span className={styles.projectSeparator}>·</span>
                    <span className={styles.comingSoonLabel}>{project.status}</span>
                  </div>
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectStack}>
                  {project.stack.map((tech) => (
                    <span key={tech} className={styles.stackItem}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
