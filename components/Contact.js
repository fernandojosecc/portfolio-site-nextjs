'use client'

const CERTIFICATIONS = [
  'AI Software Engineer (Platzi)',
  'Microsoft 365 Copilot',
  'Windsurf AI',
  'Prompt Engineering',
  'LLM Fundamentals',
  'Gemini AI',
  'Django',
  'FastAPI',
  'Angular',
  'Responsive Design',
  'Introduction to AWS',
  'SQL & MySQL',
  'Linear Algebra',
  'Lovable',
]

const EXPLORING_ITEMS = ['Agents', 'Fine-tuning', 'Multimodal', 'MLOps']

// Simple icon components
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
)

export default function Contact() {
  return (
    <section id="contact" className="border-t-[1.5px] border-[#1A1A16]">
      {/* Section Header */}
      <div className="flex items-center px-6 lg:px-12 py-6 border-b-[1.5px] border-[#1A1A16]">
        <span className="font-mono text-xs tracking-widest text-[#9A9A8E] uppercase">
          02 — Get in Touch
        </span>
      </div>

      {/* Two Column Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Column */}
        <div className="flex-1 p-8 lg:p-12 lg:border-r-[1.5px] border-[#1A1A16]">
          {/* Headline */}
          <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-[1.1] mb-6">
            <span className="block text-[#1A1A16]">Let&apos;s build</span>
            <span className="block text-[#4A4A42] italic">something</span>
            <span className="inline-block yellow-highlight text-[#1A1A16] transform -rotate-1">
              great.
            </span>
          </h2>

          {/* Description */}
          <p className="font-mono text-sm text-[#4A4A42] leading-relaxed max-w-md mb-8">
            I&apos;m actively looking for AI engineering roles, internships, and collaborative 
            projects. If you&apos;re building something interesting, let&apos;s talk.
          </p>

          {/* Contact Links */}
          <div className="space-y-3">
            <a
              href="mailto:fernandorodasc1@gmail.com"
              className="contact-link flex items-center gap-3 p-4 border-[1.5px] border-[#1A1A16] bg-transparent"
            >
              <div className="w-8 h-8 flex items-center justify-center border border-[#1A1A16] text-[#1A1A16]">
                <MailIcon />
              </div>
              <div>
                <span className="block font-mono text-xs text-[#9A9A8E]">Email</span>
                <span className="font-mono text-sm text-[#1A1A16]">fernandorodasc1@gmail.com</span>
              </div>
            </a>

            <a
              href="https://github.com/fernandojosecc"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link flex items-center gap-3 p-4 border-[1.5px] border-[#1A1A16] bg-transparent"
            >
              <div className="w-8 h-8 flex items-center justify-center border border-[#1A1A16] text-[#1A1A16]">
                <GithubIcon />
              </div>
              <div>
                <span className="block font-mono text-xs text-[#9A9A8E]">GitHub</span>
                <span className="font-mono text-sm text-[#1A1A16]">github.com/fernandojosecc</span>
              </div>
            </a>

            <a
              href="https://fernandocontreras.dev"
              className="contact-link flex items-center gap-3 p-4 border-[1.5px] border-[#1A1A16] bg-transparent"
            >
              <div className="w-8 h-8 flex items-center justify-center border border-[#1A1A16] text-[#1A1A16]">
                <GlobeIcon />
              </div>
              <div>
                <span className="block font-mono text-xs text-[#9A9A8E]">Website</span>
                <span className="font-mono text-sm text-[#1A1A16]">fernandocontreras.dev</span>
              </div>
            </a>
          </div>

          {/* Certifications */}
          <div className="mt-12">
            <p className="font-mono text-xs tracking-widest text-[#9A9A8E] uppercase mb-4">
              Certifications
            </p>
            <div className="flex flex-wrap gap-2">
              {CERTIFICATIONS.map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1.5 font-mono text-xs border border-[#1A1A16] text-[#4A4A42]"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Glass Card */}
        <div className="flex-1 p-8 lg:p-12 bg-[#EDE9DF]">
          <div className="glass-card p-6 lg:p-8">
            {/* Status Label */}
            <span className="font-mono text-xs tracking-widest text-[#9A9A8E] uppercase">
              Current status
            </span>

            {/* Status */}
            <div className="flex items-center gap-2 mt-3 mb-8">
              <div className="status-dot"></div>
              <span className="font-mono text-sm text-[#1A1A16]">Available for opportunities</span>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-[#1A1A16] opacity-20 mb-8"></div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <span className="block font-serif text-3xl font-bold text-[#1A1A16]">1</span>
                <span className="block font-mono text-xs text-[#9A9A8E] mt-1">Production app</span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-3xl font-bold text-[#1A1A16]">2</span>
                <span className="block font-mono text-xs text-[#9A9A8E] mt-1">Languages</span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-3xl font-bold text-[#1A1A16]">3</span>
                <span className="block font-mono text-xs text-[#9A9A8E] mt-1">Projects</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-[#1A1A16] opacity-20 mb-8"></div>

            {/* Currently Exploring */}
            <div>
              <span className="font-mono text-xs tracking-widest text-[#9A9A8E] uppercase">
                Currently exploring
              </span>
              <div className="flex flex-wrap gap-2 mt-3">
                {EXPLORING_ITEMS.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 font-mono text-xs border border-[#1A1A16] text-[#4A4A42]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
