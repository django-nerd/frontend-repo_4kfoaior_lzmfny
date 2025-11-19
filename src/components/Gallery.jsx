import { motion } from 'framer-motion'

const cards = [
  { title: 'Masa', emoji: '🂡', color: 'from-emerald-500/20 to-emerald-400/10' },
  { title: 'Fise', emoji: '🎲', color: 'from-rose-500/20 to-rose-400/10' },
  { title: 'Avatar', emoji: '🧝‍♂️', color: 'from-amber-500/20 to-amber-400/10' },
  { title: 'Turneu', emoji: '🏆', color: 'from-sky-500/20 to-sky-400/10' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08 }}
              className={`group aspect-[4/5] rounded-3xl p-1 bg-gradient-to-br ${c.color} ring-1 ring-white/10`}
            >
              <div className="w-full h-full rounded-[calc(theme(borderRadius.3xl)-4px)] bg-slate-900/60 backdrop-blur flex items-end p-5">
                <div>
                  <div className="text-5xl">{c.emoji}</div>
                  <div className="mt-2 text-white font-semibold">{c.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
