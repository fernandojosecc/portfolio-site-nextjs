'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#F8F5EE] border-b-[1.5px] border-[#1A1A16]">
      <div className="flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-0">
          <span className="font-serif text-xl font-bold text-[#1A1A16]">Fernando</span>
          <span className="font-serif text-xl italic text-[#F5C842]">C.</span>
        </Link>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm tracking-wide">
          <Link 
            href="#projects" 
            className="text-[#4A4A42] hover:text-[#1A1A16] transition-colors"
          >
            work
          </Link>
          <span className="text-[#9A9A8E]">·</span>
          <Link 
            href="#about" 
            className="text-[#4A4A42] hover:text-[#1A1A16] transition-colors"
          >
            about
          </Link>
          <span className="text-[#9A9A8E]">·</span>
          <Link 
            href="#contact" 
            className="text-[#4A4A42] hover:text-[#1A1A16] transition-colors"
          >
            contact
          </Link>
        </div>

        {/* Right Status */}
        <div className="flex items-center gap-2">
          <div className="status-dot"></div>
          <span className="hidden sm:inline font-mono text-xs text-[#4A4A42] tracking-wide">
            Open to opportunities
          </span>
        </div>
      </div>
    </nav>
  )
}
