'use client'

import { useState, useEffect } from 'react'

const TERMINAL_LINES = [
  { type: 'prompt', content: 'whoami' },
  { type: 'output', content: 'ai_engineer / builder / bilingual' },
  { type: 'empty', content: '' },
  { type: 'prompt', content: 'cat about.json' },
  { type: 'json', content: '{', indent: 0 },
  { type: 'json', content: '"name": "Fernando Contreras",', indent: 1, key: '"name"', value: '"Fernando Contreras"' },
  { type: 'json', content: '"focus": "AI Engineering",', indent: 1, key: '"focus"', value: '"AI Engineering"' },
  { type: 'json', content: '"languages": ["English", "Spanish"],', indent: 1, key: '"languages"', value: '["English", "Spanish"]' },
  { type: 'json', content: '"status": "open to work",', indent: 1, key: '"status"', value: '"open to work"' },
  { type: 'json', content: '"location": "California, USA"', indent: 1, key: '"location"', value: '"California, USA"' },
  { type: 'json', content: '}', indent: 0 },
  { type: 'empty', content: '' },
  { type: 'prompt', content: 'ls projects/' },
  { type: 'folder', content: 'bilingual-chatbot/   rag-assistant/   ops-agent/' },
  { type: 'empty', content: '' },
  { type: 'comment', content: '# Currently building in public...' },
  { type: 'cursor', content: '' },
]

const TYPING_SPEED = 40
const LINE_PAUSE = 400

export default function Terminal() {
  const [displayedLines, setDisplayedLines] = useState([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (currentLineIndex >= TERMINAL_LINES.length) {
      setIsTyping(false)
      return
    }

    const currentLine = TERMINAL_LINES[currentLineIndex]
    const content = currentLine.content

    if (currentCharIndex < content.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev]
          if (newLines.length <= currentLineIndex) {
            newLines.push({ ...currentLine, displayed: content.slice(0, currentCharIndex + 1) })
          } else {
            newLines[currentLineIndex] = { ...currentLine, displayed: content.slice(0, currentCharIndex + 1) }
          }
          return newLines
        })
        setCurrentCharIndex(currentCharIndex + 1)
      }, TYPING_SPEED)

      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex(currentLineIndex + 1)
        setCurrentCharIndex(0)
      }, currentLine.type === 'prompt' ? LINE_PAUSE : LINE_PAUSE / 2)

      return () => clearTimeout(timeout)
    }
  }, [currentLineIndex, currentCharIndex])

  const renderLine = (line, index) => {
    const text = line.displayed || line.content

    switch (line.type) {
      case 'prompt':
        return (
          <div key={index} className="flex items-start gap-2">
            <span className="text-[#F5C842]">❯</span>
            <span className="text-[#E8E4DA]">{text}</span>
          </div>
        )
      case 'output':
        return (
          <div key={index} className="text-[rgba(255,255,255,0.45)] pl-4">
            {text}
          </div>
        )
      case 'json':
        if (line.key && line.value) {
          const keyText = text.slice(0, line.key.length + 2)
          const valueText = text.slice(line.key.length + 2)
          return (
            <div key={index} className="pl-4" style={{ paddingLeft: `${(line.indent * 16) + 16}px` }}>
              <span className="text-[#9FC5FF]">{keyText}</span>
              <span className="text-[#A8E6C8]">{valueText}</span>
            </div>
          )
        }
        return (
          <div key={index} className="text-[rgba(255,255,255,0.45)] pl-4" style={{ paddingLeft: `${(line.indent * 16) + 16}px` }}>
            {text}
          </div>
        )
      case 'folder':
        return (
          <div key={index} className="text-[#A8E6C8] pl-4">
            {text}
          </div>
        )
      case 'comment':
        return (
          <div key={index} className="text-[rgba(255,255,255,0.25)] italic pl-4">
            {text}
          </div>
        )
      case 'cursor':
        return (
          <div key={index} className="flex items-start gap-2">
            <span className="text-[#F5C842]">❯</span>
            <span className="inline-block w-2.5 h-4 bg-[#F5C842] blink-cursor"></span>
          </div>
        )
      case 'empty':
        return <div key={index} className="h-4"></div>
      default:
        return null
    }
  }

  return (
    <div className="w-full h-full bg-[#1A1A16] relative overflow-hidden rounded-lg">
      {/* Scan lines overlay */}
      <div className="terminal-scanlines absolute inset-0 pointer-events-none z-10"></div>

      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(255,255,255,0.1)]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
        </div>
        <span className="text-[rgba(255,255,255,0.5)] text-xs font-mono ml-4">fernando.dev — bash</span>
      </div>

      {/* Terminal content */}
      <div className="p-4 font-mono text-sm leading-relaxed overflow-auto" style={{ height: 'calc(100% - 48px)' }}>
        {displayedLines.map((line, index) => renderLine(line, index))}
        {!isTyping && currentLineIndex < TERMINAL_LINES.length && (
          <div className="flex items-start gap-2">
            <span className="text-[#F5C842]">❯</span>
            <span className="inline-block w-2.5 h-4 bg-[#F5C842] blink-cursor"></span>
          </div>
        )}
      </div>
    </div>
  )
}
