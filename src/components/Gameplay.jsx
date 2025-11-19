import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

export default function Gameplay() {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0.2, 0.8], [0, 12])
  const scale = useTransform(scrollYProgress, [0.2, 0.8], [1, 1.06])
  const smoothScale = useSpring(scale, { stiffness: 60, damping: 20 })

  return (
    <section id="gameplay" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div style={{ rotate, scale: smoothScale }} className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-rose-500/30 to-amber-500/30 ring-1 ring-white/10 p-1">
            <div className="w-full h-full rounded-[calc(theme(borderRadius.3xl)-4px)] bg-slate-900/60 backdrop-blur flex items-center justify-center text-white/80">
              <div className="text-center p-8">
                <div className="text-6xl">🃏</div>
                <p className="mt-4">Demo placeholder pentru masă de poker animată</p>
                <p className="text-xs text-white/60">(înlocuibil cu un canvas, video sau preview de joc)</p>
              </div>
            </div>
          </motion.div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Joc rapid și intuitiv</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Interfețe curate, feedback instant și tranziții care te țin în flow. Design responsiv, gata pentru campanii.
            </p>
            <ul className="mt-6 space-y-3 text-white/80 text-sm">
              <li>• Scroll-driven animations</li>
              <li>• CTA fixate și efecte parallax</li>
              <li>• Elemente 3D prin Spline</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
