import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, MessageCircle } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--ivory)' }}
    >
      <div
        className="orb w-96 h-96 -top-20 -right-20 opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(253,243,200,0.5) 0%, transparent 70%)' }}
      />
      <div
        className="orb w-72 h-72 bottom-0 -left-20 opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(249,228,228,0.5) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Get in Touch</p>
          <h2 className="section-title text-4xl md:text-5xl mb-4">
            Let's Build Something{' '}
            <span className="italic" style={{ color: 'var(--mocha)' }}>Beautiful</span>
          </h2>
          <p
            className="text-base max-w-md mx-auto"
            style={{ color: 'var(--mocha)', fontFamily: 'DM Sans', opacity: 0.85 }}
          >
            Open to research collaborations, AI/ML opportunities, and meaningful conversations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="space-y-5 mb-10">
              {[
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'Bengaluru, Karnataka, India',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'priyamm.007.parashar@gmail.com',
                  href: 'https://mail.google.com/mail/?view=cm&fs=1&to=priyamm.007.parashar@gmail.com',
                },
                {
                  icon: MessageCircle,
                  label: 'Availability',
                  value: 'Open to collaborations & internships',
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(212,184,150,0.2)' }}
                  >
                    <Icon size={16} style={{ color: 'var(--mocha)' }} />
                  </div>
                  <div>
                    <p className="section-label" style={{ fontSize: '0.6rem' }}>{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium mt-0.5 block transition-colors hover:opacity-70"
                        style={{ color: 'var(--espresso)', fontFamily: 'DM Sans' }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--espresso)', fontFamily: 'DM Sans' }}>
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
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
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(212,184,150,0.3)',
                    color: 'var(--mocha)',
                  }}
                  whileHover={{
                    scale: 1.08,
                    background: 'var(--espresso)',
                    color: 'var(--cream)',
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-4">
              <p className="text-base" style={{ color: 'var(--mocha)', fontFamily: 'DM Sans', opacity: 0.9 }}>
                Reach out directly via email to discuss collaborations, opportunities, or just to say hello!
              </p>
              <motion.a
                href="mailto:priyamm.007.parashar@gmail.com"
                className="inline-block px-8 py-3.5 rounded-xl text-sm font-medium transition-all"
                style={{
                  background: 'var(--espresso)',
                  color: 'var(--cream)',
                  fontFamily: 'DM Sans',
                  width: 'fit-content',
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
