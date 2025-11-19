import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlay to improve text contrast - allow 3D interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15 text-white/80 text-xs mb-4">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Nou • LP animat la scroll
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Poker Rush
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl">
            O pagină de prezentare cu efecte la scroll, fundal 3D interactiv și secțiuni fluide ca într-un joc. Construim lumea ta de poker cu vibe cinematic.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-rose-500 hover:bg-rose-400 text-white px-5 py-3 font-medium shadow-lg shadow-rose-500/30 transition">Începe turul</a>
            <a href="#gallery" className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 text-white px-5 py-3 font-medium ring-1 ring-white/20 transition">Vezi imagini</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
