import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Star, Zap, Target, Users } from 'lucide-react'
import hackathonImg from '../assets/1778061928023_image.png'

const achievements = [
  {
    icon: Star,
    title: 'GSSoC\'26',
    subtitle: 'Open Source Contributor',
    desc: 'Selected contributor in GirlScript Summer of Code 2026, contributing to impactful open-source AI projects.',
    accent: '#FDF3C8',
    accentDark: '#B09050',
    rank: 'Active',
  },
  {
    icon: Trophy,
    title: 'Meta Hackathon',
    subtitle: 'Grand Finale Finalist',
    desc: 'Reached the Grand Finale of Meta\'s OpenEnv Hackathon — India\'s biggest AI hackathon at Scaler School of Technology.',
    accent: '#F2D8D8',
    accentDark: '#B08585',
    rank: 'Finalist',
  },
  {
    icon: Target,
    title: 'IdeaTattva Ideathon',
    subtitle: '1st Place — Pitching Round',
    desc: 'Ranked 1st in the pitching round at IdeaTattva, presenting an AI-powered healthcare solution to a panel of experts.',
    accent: '#EDE0D0',
    accentDark: '#8B6F5E',
    rank: '#1 Pitch',
  },
  {
    icon: Zap,
    title: 'Xcelerate Hackathon',
    subtitle: 'Top 20 Teams',
    desc: 'Advanced to the Top 20 teams at Xcelerate Hackathon, competing against hundreds of engineering teams.',
    accent: '#F9E4E4',
    accentDark: '#A07878',
    rank: 'Top 20',
  },
  {
    icon: Users,
    title: 'Rotaract Club RVCE',
    subtitle: 'Joint Director — Literary Services',
    desc: 'Leading literary initiatives and events at the Rotaract Club of RVCE, fostering community and creative expression.',
    accent: '#FDF3C8',
    accentDark: '#9B7E4A',
    rank: 'Leader',
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="achievements"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--ivory)' }}
    >
      <div
        className="orb w-80 h-80 -bottom-20 -right-20 opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(249,228,228,0.6) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Recognition</p>
          <h2 className="section-title text-4xl md:text-5xl">
            Milestones &{' '}
            <span className="italic" style={{ color: 'var(--mocha)' }}>Honours</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {/* Achievement cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {achievements.map((ach, i) => {
              const { icon: Icon, title, subtitle, desc, accent, accentDark, rank } = ach
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(92,61,46,0.12)' }}
                  className="relative p-5 rounded-2xl overflow-hidden cursor-default"
                  style={{
                    background: 'rgba(255,255,255,0.8)',
                    border: '1px solid rgba(212,184,150,0.2)',
                  }}
                >
                  {/* Rank badge */}
                  <div
                    className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: `${accent}CC`,
                      color: accentDark,
                      fontFamily: 'DM Sans',
                      fontSize: '0.65rem',
                    }}
                  >
                    {rank}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${accent}BB` }}
                  >
                    <Icon size={18} style={{ color: accentDark }} />
                  </div>

                  <h3
                    className="font-display text-xl mb-1"
                    style={{ color: 'var(--espresso)' }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-xs font-medium mb-3"
                    style={{ color: accentDark, fontFamily: 'DM Sans' }}
                  >
                    {subtitle}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: 'var(--mocha)', fontFamily: 'DM Sans', opacity: 0.85 }}
                  >
                    {desc}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Photo showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-1 flex flex-col justify-start"
          >
            <div className="relative">
              <motion.div
                className="overflow-hidden rounded-3xl"
                style={{ boxShadow: '0 25px 60px rgba(92,61,46,0.18)' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={hackathonImg}
                  alt="Meta Hackathon"
                  className="w-full object-cover"
                  style={{ maxHeight: '320px', objectPosition: 'center top' }}
                />
              </motion.div>

              {/* Caption */}
              <motion.div
                className="absolute -bottom-4 left-3 right-3 glass-warm rounded-xl p-3"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="section-label" style={{ fontSize: '0.55rem' }}>Meta × OpenEnv Hackathon</p>
                <p className="text-xs font-medium mt-0.5" style={{ color: 'var(--espresso)', fontFamily: 'DM Sans', fontSize: '0.7rem' }}>
                  Grand Finalist
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
