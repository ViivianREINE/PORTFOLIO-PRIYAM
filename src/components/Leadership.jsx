import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Globe, BookOpen, Lightbulb } from 'lucide-react'
import img1 from '../assets/1778061779434_image.png'
import img2 from '../assets/1778061810143_image.png'

const roles = [
  {
    icon: BookOpen,
    org: 'Rotaract Club of RVCE',
    title: 'Joint Director — Literary Services',
    period: '2023 — Present',
    desc: 'Leading the Literary Services division of Rotaract Club RVCE, organizing literary events, debates, workshops, and community storytelling initiatives that foster intellectual culture on campus.',
    accent: '#FDF3C8',
  },
  {
    icon: Globe,
    org: 'GirlScript Summer of Code',
    title: 'Open Source Contributor — GSSoC\'26',
    period: '2026',
    desc: 'Selected as a contributor in GSSoC 2026, working on impactful open-source AI and developer tooling projects. Committed to growing the open-source community through code, docs, and mentorship.',
    accent: '#F2D8D8',
  },
  {
    icon: Users,
    org: 'RV College of Engineering',
    title: 'Student Researcher & Project Lead',
    period: '2022 — Present',
    desc: 'Leading research and project teams at RVCE on healthcare AI and intelligent systems, collaborating with faculty mentors, presenting work at hackathons, and publishing findings.',
    accent: '#EDE0D0',
  },
  {
    icon: Lightbulb,
    org: 'Tech Community',
    title: 'Workshop Facilitator & Mentor',
    period: '2023 — Present',
    desc: 'Conducting workshops on Python, ML fundamentals, and AI systems for engineering students. Mentoring junior developers in open-source contributions and project development.',
    accent: '#F9E4E4',
  },
]

export default function Leadership() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="leadership"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--cream)' }}
    >
      <div
        className="orb w-72 h-72 -top-20 -right-20 opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(249,228,228,0.5) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Beyond the Code</p>
          <h2 className="section-title text-4xl md:text-5xl">
            Leadership &{' '}
            <span className="italic" style={{ color: 'var(--mocha)' }}>Community</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left — roles */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {roles.map((role, i) => {
              const { icon: Icon, org, title, period, desc, accent } = role
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(92,61,46,0.1)' }}
                  className="p-5 rounded-2xl cursor-default"
                  style={{
                    background: 'rgba(255,255,255,0.75)',
                    border: '1px solid rgba(212,184,150,0.2)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${accent}CC` }}
                  >
                    <Icon size={17} style={{ color: 'var(--mocha)' }} />
                  </div>

                  <p className="section-label mb-1" style={{ fontSize: '0.6rem' }}>{org}</p>
                  <h3
                    className="text-sm font-semibold mb-1"
                    style={{ color: 'var(--espresso)', fontFamily: 'DM Sans' }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-xs mb-3"
                    style={{ color: 'var(--sand)', fontFamily: 'DM Sans', fontWeight: 500 }}
                  >
                    {period}
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

          {/* Right — visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <motion.div
              className="overflow-hidden rounded-2xl"
              style={{ boxShadow: '0 15px 40px rgba(92,61,46,0.12)' }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={img1}
                alt="Priyam"
                className="w-full object-cover object-top"
                style={{ height: '250px' }}
              />
            </motion.div>

            <motion.div
              className="overflow-hidden rounded-2xl"
              style={{ boxShadow: '0 15px 40px rgba(92,61,46,0.12)' }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={img2}
                alt="Priyam"
                className="w-full object-cover object-top"
                style={{ height: '200px' }}
              />
            </motion.div>

            {/* Values card */}
            <motion.div
              className="p-5 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(249,228,228,0.5), rgba(253,243,200,0.4))',
                border: '1px solid rgba(212,184,150,0.25)',
              }}
            >
              <p
                className="font-display text-base italic leading-relaxed text-center"
                style={{ color: 'var(--espresso)' }}
              >
                "Empathy is the engine of innovation."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
