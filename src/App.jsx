import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Gameplay from './components/Gameplay'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Gameplay />
      <Gallery />
      <footer className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white/60">
          © {new Date().getFullYear()} Poker Rush • Landing page animat la scroll
        </div>
      </footer>
    </div>
  )
}

export default App
