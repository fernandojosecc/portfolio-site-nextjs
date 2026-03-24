'use client'

const PROJECTS = [
  {
    id: '01',
    title: 'Bilingual AI Chatbot',
    description: 'Conversational AI that responds in both English and Spanish. Built with Python, Flask, and the OpenAI API. Fully deployed and accessible to anyone.',
    stack: ['Python', 'Flask', 'OpenAI', 'Railway'],
    status: 'LIVE',
    featured: true,
    liveUrl: 'https://web-production-a3065.up.railway.app',
    githubUrl: 'https://github.com/fernandojosecc/bilingual-chatbot',
  },
  {
    id: '02',
    title: 'RAG Document Assistant',
    description: 'Upload any PDF and chat with it. Powered by LangChain and vector search.',
    stack: ['LangChain', 'Pinecone', 'FastAPI'],
    status: 'Coming Soon',
    featured: false,
  },
  {
    id: '03',
    title: 'AI Operations Agent',
    description: 'Autonomous agent that solves real operations problems using tool-use.',
    stack: ['Agents', 'AWS', 'FastAPI'],
    status: 'Coming Soon',
    featured: false,
  },
]

const CODE_SNIPPET = `from openai import OpenAI
from flask import Flask, request

app = Flask(__name__)

def get_response(message, lang):
    system = "Respond in " + ("English" if lang == "en" else "Spanish")
    return client.chat(
        model="gpt-4",
        messages=[{"role": "user", "content": message}],
        temperature=0.7,
        context=system)`

export default function Projects() {
  const featuredProject = PROJECTS.find((p) => p.featured)
  const otherProjects = PROJECTS.filter((p) => !p.featured)

  return (
    <section id="projects" className="border-t-[1.5px] border-[#1A1A16]">
      {/* Section Header */}
      <div className="flex items-center justify-between px-6 lg:px-12 py-6 border-b-[1.5px] border-[#1A1A16]">
        <span className="font-mono text-xs tracking-widest text-[#9A9A8E] uppercase">
          01 — Selected Work
        </span>
        <a
          href="https://github.com/fernandojosecc"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-[#4A4A42] hover:text-[#1A1A16] transition-colors border-b border-[#4A4A42] hover:border-[#1A1A16]"
        >
          view all on github →
        </a>
      </div>

      {/* Featured Project */}
      {featuredProject && (
        <div className="featured-card relative bg-[#1A1A16] border-b-[1.5px] border-[#1A1A16]">
          <div className="flex flex-col lg:flex-row">
            {/* Left - Content */}
            <div className="flex-1 p-8 lg:p-12">
              {/* Featured Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[rgba(245,200,66,0.15)] border border-[#F5C842] rounded-full mb-6">
                <span className="text-[#F5C842]">⭐</span>
                <span className="font-mono text-xs text-[#F5C842] tracking-wide">Featured · Live in Production</span>
              </div>

              {/* Project Number */}
              <span className="block font-mono text-xs text-[#9A9A8E] mb-2">
                PROJECT {featuredProject.id}
              </span>

              {/* Title */}
              <h3 className="font-serif text-3xl lg:text-4xl italic text-[#F8F5EE] mb-4">
                {featuredProject.title}
              </h3>

              {/* Description */}
              <p className="font-mono text-sm text-[#9A9A8E] leading-relaxed max-w-md mb-6">
                {featuredProject.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 font-mono text-xs border border-[#4A4A42] text-[#9A9A8E]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm text-[#F5C842] hover:underline"
              >
                View project ↗
              </a>
            </div>

            {/* Right - Code Snippet */}
            <div className="flex-1 p-8 lg:p-12 lg:border-l-[1.5px] border-[#4A4A42]">
              <div className="h-full bg-[#0D0D0A] border border-[#4A4A42] rounded p-6 font-mono text-xs leading-relaxed overflow-auto">
                <pre className="text-[#A8E6C8]">
                  <code>{CODE_SNIPPET}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other Projects Grid */}
      <div className="grid md:grid-cols-2 border-b-[1.5px] border-[#1A1A16]">
        {otherProjects.map((project) => (
          <div
            key={project.id}
            className="project-card p-8 lg:p-12 bg-[#F8F5EE] border-r-[1.5px] border-[#1A1A16] last:border-r-0 hover:bg-[#FDF6D8] transition-colors"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[rgba(245,200,66,0.1)] border border-[#F5C842] rounded-full mb-6">
              <span className="font-mono text-xs text-[#D4A800] tracking-wide">{project.status}</span>
            </div>

            {/* Project Number */}
            <span className="block font-mono text-xs text-[#9A9A8E] mb-2">
              PROJECT {project.id}
            </span>

            {/* Title */}
            <h3 className="font-serif text-2xl italic text-[#1A1A16] mb-4">
              {project.title}
            </h3>

            {/* Description */}
            <p className="font-mono text-sm text-[#4A4A42] leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 font-mono text-xs border border-[#1A1A16] text-[#4A4A42]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
