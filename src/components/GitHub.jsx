import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, Star, GitFork, Code, Activity } from 'lucide-react'

// Generate a fake contribution grid (52 weeks × 7 days)
const generateContribs = () => {
  const data = []
  for (let week = 0; week < 52; week++) {
    const row = []
    for (let day = 0; day < 7; day++) {
      const rand = Math.random()
      let level = 0
      if (rand > 0.85) level = 4
      else if (rand > 0.7) level = 3
      else if (rand > 0.55) level = 2
      else if (rand > 0.4) level = 1
      row.push(level)
    }
    data.push(row)
  }
  return data
}

const contribs = generateContribs()

const repos = [
  {
    name: 'Vineetra-Bharat',
    desc: 'Multilingual clinical documentation AI infrastructure for Indian regional languages',
    stars: 12,
    forks: 4,
    lang: 'Python',
    color: '#F2D8D8',
  },
  {
    name: 'OpenEnv-Simulator',
    desc: 'Multi-agent emergency coordination simulator with PPO reinforcement learning',
    stars: 18,
    forks: 6,
    lang: 'Python',
    color: '#FDF3C8',
  },
  {
    name: 'Parkinsons-ML',
    desc: 'Early Parkinson\'s detection from voice features — peer-reviewed research',
    stars: 9,
    forks: 3,
    lang: 'Jupyter',
    color: '#EDE0D0',
  },
]

export default function GitHub() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    if (inView) setTimeout(() => setRevealed(true), 400)
  }, [inView])

  return (
    <section
      id="github"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--ivory)' }}
    >
      <div
        className="orb w-80 h-80 top-10 -right-20 opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(212,184,150,0.5) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Open Source</p>
          <h2 className="section-title text-4xl md:text-5xl">
            GitHub{' '}
            <span className="italic" style={{ color: 'var(--mocha)' }}>Activity</span>
          </h2>
        </motion.div>

        {/* Profile link */}
        <motion.a
          href="https://github.com/ViivianREINE"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl mb-10 transition-all"
          style={{
            background: 'var(--espresso)',
            color: 'var(--cream)',
            fontFamily: 'DM Sans',
            fontSize: '0.85rem',
            fontWeight: 500,
          }}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <Github size={17} />
          @ViivianREINE
          <Activity size={14} style={{ opacity: 0.7 }} />
        </motion.a>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-6 md:p-8 rounded-3xl mb-8 overflow-x-auto"
          style={{
            background: 'rgba(255,255,255,0.75)',
            border: '1px solid rgba(212,184,150,0.2)',
          }}
        >
          <p className="section-label mb-4" style={{ fontSize: '0.65rem' }}>Contribution Activity</p>

          <div className="flex gap-1 min-w-max">
            {contribs.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-1">
                {week.map((level, di) => (
                  <motion.div
                    key={di}
                    className={`w-3 h-3 rounded-sm contrib-${level}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={revealed ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: (wi * 7 + di) * 0.002,
                      ease: 'backOut'
                    }}
                    title={`Level ${level}`}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-xs" style={{ color: 'var(--sand)', fontFamily: 'DM Sans' }}>Less</span>
            {[0, 1, 2, 3, 4].map(l => (
              <div key={l} className={`w-3 h-3 rounded-sm contrib-${l}`} />
            ))}
            <span className="text-xs" style={{ color: 'var(--sand)', fontFamily: 'DM Sans' }}>More</span>
          </div>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Repositories', value: '18+', icon: Code },
            { label: 'Total Stars', value: '40+', icon: Star },
            { label: 'Contributions', value: '300+', icon: Activity },
            { label: 'Languages', value: '6+', icon: Github },
          ].map(({ label, value, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
              className="p-5 rounded-2xl text-center"
              style={{
                background: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(212,184,150,0.2)',
              }}
              whileHover={{ y: -3 }}
            >
              <Icon size={18} className="mx-auto mb-2" style={{ color: 'var(--sand)' }} />
              <div
                className="font-display text-2xl font-semibold mb-1"
                style={{ color: 'var(--espresso)' }}
              >
                {value}
              </div>
              <div className="text-xs" style={{ color: 'var(--sand)', fontFamily: 'DM Sans' }}>
                {label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Repo Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={`https://github.com/ViivianREINE/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.1 }}
              className="p-5 rounded-2xl block transition-all"
              style={{
                background: 'rgba(255,255,255,0.75)',
                border: '1px solid rgba(212,184,150,0.2)',
              }}
              whileHover={{ y: -5, boxShadow: '0 12px 30px rgba(92,61,46,0.1)' }}
            >
              <div className="flex items-start justify-between mb-3">
                <Github size={16} style={{ color: 'var(--mocha)' }} />
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ background: `${repo.color}CC`, color: 'var(--mocha)', fontFamily: 'DM Sans', fontSize: '0.65rem' }}
                >
                  {repo.lang}
                </span>
              </div>

              <h4
                className="text-sm font-semibold mb-2"
                style={{ color: 'var(--espresso)', fontFamily: 'DM Sans' }}
              >
                {repo.name}
              </h4>

              <p
                className="text-xs leading-relaxed mb-4"
                style={{ color: 'var(--mocha)', fontFamily: 'DM Sans', opacity: 0.8 }}
              >
                {repo.desc}
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Star size={12} style={{ color: 'var(--sand)' }} />
                  <span className="text-xs" style={{ color: 'var(--mocha)', fontFamily: 'DM Sans' }}>
                    {repo.stars}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GitFork size={12} style={{ color: 'var(--sand)' }} />
                  <span className="text-xs" style={{ color: 'var(--mocha)', fontFamily: 'DM Sans' }}>
                    {repo.forks}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
