export default function Footer() {
  return (
    <footer className="border-t-[1.5px] border-[#1A1A16] bg-[#F8F5EE]">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 py-6">
        {/* Left */}
        <div className="font-serif italic text-[#4A4A42]">
          Fernando Contreras
        </div>

        {/* Center */}
        <div className="font-mono text-xs text-[#9A9A8E] my-4 md:my-0">
          fernandocontreras.dev · 2025
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <div className="w-4 h-[2px] bg-[#F5C842]"></div>
          <span className="font-mono text-xs text-[#4A4A42]">building in public</span>
        </div>
      </div>
    </footer>
  )
}
