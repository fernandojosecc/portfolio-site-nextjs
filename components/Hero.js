'use client'

import Terminal from './Terminal'

const STACK_ITEMS = [
  'Python',
  'OpenAI API',
  'Flask',
  'LangChain',
  'FastAPI',
  'AWS',
  'Pinecone',
  'Agents',
  'Prompt Engineering',
  'Bilingual EN/ES',
]

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-[calc(100vh-73px)] flex flex-col lg:flex-row">
      {/* Left Column */}
      <div className="flex-1 flex flex-col justify-between px-6 lg:px-12 py-12 lg:border-r-[1.5px] border-[#1A1A16]">
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#F5C842]"></div>
            <span className="font-mono text-xs tracking-widest text-[#4A4A42] uppercase">
              AI Tools Specialist · Bilingual EN/ES
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            <span className="block text-[#1A1A16]">Building</span>
            <span className="block text-[#4A4A42] italic">intelligent</span>
            <span className="inline-block yellow-highlight text-[#1A1A16] transform -rotate-1">
              systems.
            </span>
          </h1>

          {/* Bio */}
          <p className="font-mono text-sm text-[#4A4A42] leading-relaxed max-w-md mb-8">
            I&apos;m a software development student with a focus on AI engineering. I build real tools — 
            chatbots, RAG pipelines, and autonomous agents — with a bias toward shipping things that 
            actually work. Bilingual EN/ES, based in California.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 bg-[#1A1A16] text-[#F8F5EE] font-mono text-sm tracking-wide hover:bg-[#F5C842] hover:text-[#1A1A16] transition-all duration-150"
            >
              View my work
            </button>
            <a
              href="https://github.com/fernandojosecc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 font-mono text-sm tracking-wide border-b-[1.5px] border-[#1A1A16] hover:border-[#F5C842] transition-colors"
            >
              GitHub →
            </a>
          </div>
        </div>

        {/* Stack Pills */}
        <div className="mt-12">
          <p className="font-mono text-xs tracking-widest text-[#9A9A8E] uppercase mb-3">
            Core stack
          </p>
          <div className="flex flex-wrap gap-2">
            {STACK_ITEMS.map((item) => (
              <span
                key={item}
                className="stack-pill px-3 py-1.5 font-mono text-xs border border-[#1A1A16] text-[#1A1A16]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Terminal */}
      <div className="flex-1 bg-[#1A1A16] p-6 lg:p-8">
        <div className="h-full min-h-[400px] lg:min-h-0">
          <Terminal />
        </div>
      </div>
    </section>
  )
}
