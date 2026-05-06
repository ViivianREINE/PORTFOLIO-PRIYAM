import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, Heart, Code2, Globe, BookOpen } from 'lucide-react'
import aboutImg from '../assets/1778061789793_image.png'
import campusImg from '../assets/1778061826115_image.png'

const pillars = [
  { icon: Brain, label: 'AI & ML Systems', desc: 'Reinforcement Learning, Multi-Agent Systems, LLM Engineering' },
  { icon: Heart, label: 'Healthcare AI', desc: 'Clinical NLP, Medical Documentation, Diagnostic Models' },
  { icon: Code2, label: 'Systems Engineering', desc: 'Real-Time Infrastructure, Scalable Backends, Edge Deployment' },
  { icon: Globe, label: 'Open Source', desc: 'GSSoC Contributor, Community Builder, Knowledge Sharer' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
  }

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden" style={{ background: 'var(--ivory)' }}>
      {/* Orbs */}
      <div
        className="orb w-72 h-72 -bottom-20 -right-20 opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(249,228,228,0.6) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <motion.p variants={itemVariants} className="section-label mb-3">Who I Am</motion.p>
          <motion.h2
            variants={itemVariants}
            className="section-title text-4xl md:text-5xl"
          >
            Crafting Intelligence
            <br />
            <span className="italic" style={{ color: 'var(--mocha)' }}>with Purpose</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Images mosaic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative">
              {/* Primary image */}
              <motion.div
                className="relative overflow-hidden rounded-3xl"
                style={{ boxShadow: '0 25px 60px rgba(92,61,46,0.15)' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={aboutImg}
                  alt="Priyam Parashar"
                  className="w-full object-cover"
                  style={{ height: '420px', objectPosition: 'top' }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top right, rgba(92,61,46,0.1), transparent)',
                  }}
                />
              </motion.div>

              {/* Secondary image — floating */}
              <motion.div
                className="absolute -bottom-8 -right-6 overflow-hidden rounded-2xl"
                style={{
                  width: '180px',
                  boxShadow: '0 15px 40px rgba(92,61,46,0.2)',
                  border: '3px solid rgba(250,246,240,0.9)',
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src={campusImg}
                  alt="Campus"
                  className="w-full object-cover"
                  style={{ height: '160px', objectPosition: 'center' }}
                />
              </motion.div>

              {/* Quote card */}
              <motion.div
                className="absolute -top-6 -left-6 glass-warm rounded-2xl p-4 max-w-xs"
                style={{ boxShadow: '0 10px 30px rgba(92,61,46,0.1)' }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <p
                  className="font-display text-sm italic leading-relaxed"
                  style={{ color: 'var(--espresso)' }}
                >
                  "Where intelligence meets empathy."
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="w-6 h-px" style={{ background: 'var(--sand)' }} />
                  <span className="section-label" style={{ fontSize: '0.6rem' }}>Design Philosophy</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg leading-relaxed mb-6"
              style={{ color: 'var(--mocha)', fontFamily: 'DM Sans', fontWeight: 400 }}
            >
              I'm Priyam Parashar, an AI Systems Developer and researcher at{' '}
              <strong style={{ color: 'var(--espresso)', fontWeight: 600 }}>
                RV College of Engineering
              </strong>, where I stand at the intersection of machine intelligence and real-world systems.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed mb-6"
              style={{ color: 'var(--mocha)', fontFamily: 'DM Sans' }}
            >
              My work is driven by a singular conviction — that intelligent systems can make
              the world more humane. Whether it's building multilingual clinical AI for
              rural healthcare access, developing multi-agent emergency simulators with
              reinforcement learning, or engineering scalable software infrastructures,
              I bring rigorous research thinking into every line of code.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed mb-10"
              style={{ color: 'var(--mocha)', fontFamily: 'DM Sans' }}
            >
              I believe technology is most powerful when it's built with empathy — understanding the lives
              it touches, the barriers it must overcome, and the futures it can unlock. My research
              in early Parkinson's detection and clinical NLP reflects this deeply personal commitment
              to meaningful, evidence-based innovation.
            </motion.p>

            {/* Pillars grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-3"
            >
              {pillars.map(({ icon: Icon, label, desc }) => (
                <motion.div
                  key={label}
                  variants={itemVariants}
                  className="p-4 rounded-2xl transition-all cursor-default"
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(212,184,150,0.25)',
                  }}
                  whileHover={{
                    background: 'rgba(255,255,255,0.95)',
                    boxShadow: '0 8px 25px rgba(92,61,46,0.08)',
                    y: -3,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: 'linear-gradient(135deg, rgba(249,228,228,0.8), rgba(212,184,150,0.4))' }}
                  >
                    <Icon size={15} style={{ color: 'var(--mocha)' }} />
                  </div>
                  <p className="text-xs font-semibold mb-1" style={{ color: 'var(--espresso)', fontFamily: 'DM Sans' }}>
                    {label}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--mocha)', fontFamily: 'DM Sans', opacity: 0.8 }}>
                    {desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
