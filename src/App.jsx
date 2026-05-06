import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Research from './components/Research'
import Achievements from './components/Achievements'
import Experience from './components/Experience'
import GitHub from './components/GitHub'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Loading Screen
const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 300)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 80)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Orbs */}
      <div className="orb w-64 h-64 bg-rose-200/30 top-1/4 -left-16" />
      <div className="orb w-48 h-48 bg-amber-100/40 bottom-1/4 right-10" />

      <motion.div className="text-center relative z-10">
        <motion.p
          className="section-label mb-6 tracking-widest"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Portfolio
        </motion.p>
        <motion.h1
          className="font-display text-5xl md:text-7xl text-espresso mb-2"
          style={{ color: 'var(--espresso)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Priyam
        </motion.h1>
        <motion.h1
          className="font-display text-5xl md:text-7xl italic mb-10"
          style={{ color: 'var(--mocha)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Parashar
        </motion.h1>

        {/* Progress */}
        <div className="w-48 mx-auto">
          <div className="h-px bg-beige rounded-full overflow-hidden" style={{ background: 'var(--beige)' }}>
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, var(--sand), var(--mocha))',
                width: `${Math.min(progress, 100)}%`
              }}
            />
          </div>
          <motion.p
            className="text-xs mt-3 font-sans"
            style={{ color: 'var(--sand)', fontFamily: 'DM Sans' }}
          >
            {Math.min(Math.floor(progress), 100)}%
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [cursorPos, setCursorPos] = useState({ x: -300, y: -300 })
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  // Theme mode
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cursor glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Scroll Progress */}
      <div
        id="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Cursor Glow */}
      <div
        className="cursor-glow"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      {/* Grain texture */}
      <div className="grain" aria-hidden="true" />

      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar theme={theme} setTheme={setTheme} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Research />
            <Achievements />
            <Experience />
            <GitHub />
            <Leadership />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  )
}
