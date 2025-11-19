import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, Shield, Gauge, Crown } from 'lucide-react'

export default function Features() {
  const { scrollYProgress } = useScroll()
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

  return (
    <section id="features" className="relative py-28">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(244,63,94,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Sparkles, title: 'Efecte dinamice', desc: 'Animații fluide la scroll și interacțiuni care prind viață.' },
            { icon: Shield, title: 'Fair play', desc: 'Mecanică echilibrată și protecție anti-cheat.' },
            { icon: Gauge, title: 'Performanță', desc: 'Încărcare rapidă, optimizat pentru dispozitive mobile.' },
            { icon: Crown, title: 'Tematică premium', desc: 'Atmosferă inspirată de cazinou, cu accente neon.' },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06 }}
              className="group rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6 backdrop-blur hover:bg-slate-900/70 transition"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl p-2.5 bg-white/5 ring-1 ring-white/10">
                  <f.icon className="text-rose-400" size={22} />
                </div>
                <h3 className="text-white font-semibold tracking-tight">{f.title}</h3>
              </div>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
