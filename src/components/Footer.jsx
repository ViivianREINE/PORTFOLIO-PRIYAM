import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative py-12 overflow-hidden"
      style={{ background: 'var(--espresso)' }}
    >
      {/* Orbs */}
      <div
        className="orb w-64 h-64 -top-20 -left-20 opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(249,228,228,0.6) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3
              className="font-display text-3xl italic mb-2"
              style={{ color: 'var(--cream)' }}
            >
              Priyam<span style={{ color: 'var(--sand)' }}>.</span>
            </h3>
            <p
              className="text-xs leading-relaxed"
              style={{ color: 'rgba(250,246,240,0.5)', fontFamily: 'DM Sans' }}
            >
              AI Systems Developer · Healthcare AI Researcher
              <br />
              RV College of Engineering, Bengaluru
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-2">
            {['About', 'Skills', 'Projects', 'Research', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs transition-colors hover:opacity-100"
                style={{
                  color: 'rgba(250,246,240,0.45)',
                  fontFamily: 'DM Sans',
                  fontWeight: 500,
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex md:justify-end gap-3">
            {[
              { icon: Github, href: 'https://github.com/ViivianREINE', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/priyam-parashar-5b0b67273/', label: 'LinkedIn' },
              { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=priyamm.007.parashar@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                style={{
                  background: 'rgba(250,246,240,0.08)',
                  border: '1px solid rgba(250,246,240,0.1)',
                  color: 'rgba(250,246,240,0.5)',
                }}
                whileHover={{
                  scale: 1.1,
                  background: 'rgba(250,246,240,0.15)',
                  color: 'var(--cream)',
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-8 h-px"
          style={{ background: 'rgba(250,246,240,0.08)' }}
        />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-center"
            style={{ color: 'rgba(250,246,240,0.3)', fontFamily: 'DM Sans' }}
          >
            © {year} Priyam Parashar. All rights reserved.
          </p>

          <p
            className="text-xs flex items-center gap-1.5"
            style={{ color: 'rgba(250,246,240,0.3)', fontFamily: 'DM Sans' }}
          >
            Crafted with
            <Heart size={11} style={{ color: 'rgba(242,180,180,0.6)' }} />
            in Bengaluru
          </p>
        </div>
      </div>
    </footer>
  )
}
