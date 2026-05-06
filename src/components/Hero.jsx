import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, FileText, ChevronDown, Sparkles } from 'lucide-react'

// Import images
import heroImg from '../assets/1778061796514_image.png'

// Floating particle component
const Particle = ({ delay, x, y, size }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      left: x,
      top: y,
      width: size,
      height: size,
      background: `radial-gradient(circle, rgba(212, 184, 150, 0.5) 0%, transparent 70%)`,
    }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.3, 1],
    }}
    transition={{
      duration: 5 + Math.random() * 4,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
)

// Animated gradient orb
const GradOrb = ({ className, color, delay = 0 }) => (
  <motion.div
    className={`orb ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.4, 0.7, 0.4],
    }}
    transition={{ duration: 8, delay, repeat: Infinity, ease: 'easeInOut' }}
    style={{ background: color }}
  />
)

export default function Hero() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    delay: i * 0.3,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: `${4 + Math.random() * 10}px`,
  }))

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FAF6F0 0%, #F5EFE6 40%, #FFF8F0 100%)' }}
    >
      {/* Background orbs */}
      <GradOrb
        className="w-96 h-96 -top-24 -right-24"
        color="radial-gradient(circle, rgba(249,228,228,0.5) 0%, transparent 70%)"
      />
      <GradOrb
        className="w-80 h-80 bottom-20 -left-20"
        color="radial-gradient(circle, rgba(253,243,200,0.4) 0%, transparent 70%)"
        delay={3}
      />
      <GradOrb
        className="w-64 h-64 top-1/3 left-1/4"
        color="radial-gradient(circle, rgba(212,184,150,0.2) 0%, transparent 70%)"
        delay={1.5}
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(p => (
          <Particle key={p.id} delay={p.delay} x={p.x} y={p.y} size={p.size} />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Label */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-warm">
                <Sparkles size={13} style={{ color: 'var(--sand)' }} />
                <span className="section-label text-xs">AI Systems Developer</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
              style={{ color: 'var(--espresso)' }}
            >
              Building{' '}
              <span className="italic" style={{ color: 'var(--mocha)' }}>Intelligent</span>
              <br />
              Systems for
              <br />
              <span className="gradient-text">Real‑World Impact</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: 'var(--mocha)', fontFamily: 'DM Sans', fontWeight: 400 }}
            >
              Healthcare AI · Intelligent Infrastructure · Reinforcement Learning · Open Source
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
              <motion.a
                href="https://github.com/ViivianREINE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all"
                style={{
                  background: 'var(--espresso)',
                  color: 'var(--cream)',
                  fontFamily: 'DM Sans',
                }}
                whileHover={{ scale: 1.04, y: -2, boxShadow: '0 10px 30px rgba(92,61,46,0.25)' }}
                whileTap={{ scale: 0.97 }}
              >
                <Github size={16} />
                GitHub
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/priyam-parashar-5b0b67273/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all glass-warm"
                style={{ color: 'var(--espresso)', fontFamily: 'DM Sans' }}
                whileHover={{ scale: 1.04, y: -2, boxShadow: '0 10px 30px rgba(139,111,94,0.15)' }}
                whileTap={{ scale: 0.97 }}
              >
                <Linkedin size={16} />
                LinkedIn
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download="Priyam-Parashar-Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all"
                style={{
                  border: '1px solid rgba(212, 184, 150, 0.5)',
                  color: 'var(--mocha)',
                  fontFamily: 'DM Sans',
                  background: 'rgba(212,184,150,0.08)',
                }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <FileText size={16} />
                Resume
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={itemVariants} className="flex gap-8">
              {[
                { num: '3+', label: 'Projects Shipped' },
                { num: '4+', label: 'Hackathons' },
                { num: '1', label: 'Publication' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-semibold" style={{ color: 'var(--espresso)' }}>
                    {stat.num}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--sand)', fontFamily: 'DM Sans' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow rings */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(249,228,228,0.6), rgba(253,243,200,0.4), rgba(212,184,150,0.4))',
                  transform: 'scale(1.04)',
                  filter: 'blur(20px)',
                }}
              />

              {/* Decorative frame elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 rounded-tr-xl"
                style={{ borderColor: 'var(--sand)', opacity: 0.6 }}
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 rounded-bl-xl"
                style={{ borderColor: 'var(--sand)', opacity: 0.6 }}
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />

              {/* Image container */}
              <motion.div
                className="relative overflow-hidden rounded-3xl"
                style={{
                  boxShadow: '0 30px 80px rgba(92,61,46,0.2), 0 10px 30px rgba(92,61,46,0.12)',
                }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src={heroImg}
                  alt="Priyam Parashar"
                  className="w-72 md:w-80 lg:w-96 object-cover object-top"
                  style={{ aspectRatio: '3/4' }}
                />
                {/* Overlay gradient at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24"
                  style={{
                    background: 'linear-gradient(to top, rgba(245,239,230,0.8), transparent)',
                  }}
                />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-5 -left-5 glass-warm rounded-2xl px-4 py-3 shadow-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <p className="section-label" style={{ fontSize: '0.6rem' }}>Currently</p>
                <p className="text-xs font-medium mt-0.5" style={{ color: 'var(--espresso)', fontFamily: 'DM Sans' }}>
                  RV College of Engineering
                </p>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                className="absolute -top-4 -right-8 glass-warm rounded-2xl px-4 py-3 shadow-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                <p className="section-label" style={{ fontSize: '0.6rem' }}>Specialization</p>
                <p className="text-xs font-medium mt-0.5" style={{ color: 'var(--espresso)', fontFamily: 'DM Sans' }}>
                  Healthcare AI
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="section-label" style={{ fontSize: '0.6rem' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} style={{ color: 'var(--sand)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
