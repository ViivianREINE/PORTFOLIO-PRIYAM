import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Active section detection
      const sections = navItems.map(item => item.href.replace('#', ''))
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`mx-4 md:mx-8 rounded-2xl transition-all duration-500 ${
            scrolled
              ? 'glass-warm shadow-lg px-6 py-3'
              : 'px-6 py-3'
          }`}
        >
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            {/* Logo */}
            <motion.a
              href="#hero"
              className="font-display text-xl italic"
              style={{ color: 'var(--espresso)' }}
              whileHover={{ scale: 1.02 }}
            >
              Priyam<span style={{ color: 'var(--sand)' }}>.</span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className={`nav-item px-4 py-2 rounded-xl text-sm font-sans transition-all duration-300 flex items-center gap-2 ${
                      isActive ? 'active' : ''
                    }`}
                    style={{
                      color: isActive ? 'var(--espresso)' : 'var(--mocha)',
                      background: isActive ? 'rgba(212, 184, 150, 0.15)' : 'transparent',
                      fontFamily: 'DM Sans',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {item.label}
                    <span className="nav-dot" />
                  </motion.a>
                )
              })}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-xl transition-all"
                style={{
                  background: 'rgba(92, 61, 46, 0.08)',
                  color: 'var(--espresso)',
                }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300"
              style={{
                background: 'var(--espresso)',
                color: 'var(--cream)',
                fontFamily: 'DM Sans',
                fontSize: '0.82rem',
              }}
              whileHover={{ scale: 1.03, background: 'var(--mocha)' }}
              whileTap={{ scale: 0.97 }}
            >
              Say Hello
            </motion.a>

            {/* Mobile Theme Toggle */}
            <button
              className="md:hidden p-2 rounded-xl transition-colors mr-2"
              style={{ color: 'var(--espresso)' }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-xl transition-colors"
              style={{ color: 'var(--espresso)' }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-4 right-4 z-40 glass-warm rounded-2xl p-6 shadow-luxury"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="py-3 px-4 rounded-xl font-sans text-sm font-medium transition-colors"
                  style={{
                    color: 'var(--espresso)',
                    fontFamily: 'DM Sans',
                    borderBottom: '1px solid rgba(212, 184, 150, 0.15)',
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-2 py-3 px-4 rounded-xl text-center font-medium text-sm"
                style={{
                  background: 'var(--espresso)',
                  color: 'var(--cream)',
                  fontFamily: 'DM Sans',
                }}
                onClick={() => setMenuOpen(false)}
              >
                Say Hello
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
