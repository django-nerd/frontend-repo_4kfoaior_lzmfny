import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border border-white/10 shadow-lg">
          <div className="flex items-center justify-between px-6 py-3">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-rose-500 to-amber-500 shadow ring-1 ring-white/20" />
              <span className="text-white font-semibold tracking-tight">Poker Rush</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#features" className="text-white/80 hover:text-white transition">Caracteristici</a>
              <a href="#gameplay" className="text-white/80 hover:text-white transition">Gameplay</a>
              <a href="#gallery" className="text-white/80 hover:text-white transition">Galerie</a>
            </nav>
            <button className="md:hidden text-white/80"><Menu size={22} /></button>
          </div>
        </div>
      </div>
    </header>
  )
}
