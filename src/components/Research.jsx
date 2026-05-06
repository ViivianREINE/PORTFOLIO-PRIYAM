import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookOpen, ExternalLink, Calendar, Award, Mic } from 'lucide-react'

export default function Research() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="research"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--cream)' }}
    >
      <div
        className="orb w-80 h-80 top-10 right-0 opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(253,243,200,0.6) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Academic Contributions</p>
          <h2 className="section-title text-4xl md:text-5xl">
            Research &{' '}
            <span className="italic" style={{ color: 'var(--mocha)' }}>Publications</span>
          </h2>
        </motion.div>

        {/* Publication Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl p-8 md:p-12"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(250,246,240,0.8))',
            border: '1px solid rgba(212,184,150,0.25)',
          }}
        >
          {/* Background decoration */}
          <div
            className="absolute top-0 right-0 w-64 h-64 opacity-30 pointer-events-none"
            style={{ background: 'radial-gradient(circle at top right, rgba(249,228,228,0.8) 0%, transparent 70%)' }}
          />

          <div className="relative grid md:grid-cols-3 gap-8 items-center">
            {/* Icon */}
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <div className="relative">
                <div
                  className="w-28 h-28 rounded-3xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(249,228,228,0.8), rgba(253,243,200,0.6))' }}
                >
                  <Mic size={44} style={{ color: 'var(--mocha)' }} />
                </div>
                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-xl"
                  style={{
                    background: 'var(--espresso)',
                    color: 'var(--cream)',
                  }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="flex items-center gap-1.5">
                    <Award size={11} style={{ color: 'var(--butter)' }} />
                    <span style={{ fontFamily: 'DM Sans', fontSize: '0.65rem', fontWeight: 600 }}>
                      Peer Reviewed
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="section-label" style={{ fontSize: '0.65rem' }}>Conference / Journal Paper</span>
              </div>

              <h3
                className="font-display text-2xl md:text-3xl font-semibold mb-4 leading-tight"
                style={{ color: 'var(--espresso)' }}
              >
                Machine Learning‑Based Early Detection of{' '}
                <span className="italic" style={{ color: 'var(--mocha)' }}>
                  Parkinson's Disease
                </span>{' '}
                Using Voice Features
              </h3>

              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: 'var(--mocha)', fontFamily: 'DM Sans' }}
              >
                This paper presents a machine learning framework for early detection of Parkinson's disease
                using voice signal biomarkers — including jitter, shimmer, and harmonic-to-noise ratio features.
                We evaluated SVM, Random Forest, and ensemble approaches with rigorous clinical validation pipelines,
                demonstrating high sensitivity and specificity that could enable cost-effective population screening.
              </p>

              {/* Meta info */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={13} style={{ color: 'var(--sand)' }} />
                  <span className="text-xs" style={{ color: 'var(--mocha)', fontFamily: 'DM Sans' }}>
                    2024
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen size={13} style={{ color: 'var(--sand)' }} />
                  <span className="text-xs" style={{ color: 'var(--mocha)', fontFamily: 'DM Sans' }}>
                    Machine Learning · Healthcare AI
                  </span>
                </div>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['SVM', 'Random Forest', 'Signal Processing', 'ROC-AUC', 'Clinical Validation', 'Python'].map(tag => (
                  <span key={tag} className="tag" style={{ fontSize: '0.65rem' }}>{tag}</span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <motion.a
                  href="https://www.researchgate.net/publication/394926692_Machine_Learning-Based_Early_Detection_of_Parkinson's_Disease_Using_Voice_Features"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium"
                  style={{
                    background: 'var(--espresso)',
                    color: 'var(--cream)',
                    fontFamily: 'DM Sans',
                  }}
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <BookOpen size={14} />
                  Read Paper
                </motion.a>

                <motion.a
                  href="https://www.researchgate.net/publication/394926692_Machine_Learning-Based_Early_Detection_of_Parkinson's_Disease_Using_Voice_Features"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium"
                  style={{
                    border: '1px solid rgba(212,184,150,0.4)',
                    color: 'var(--mocha)',
                    fontFamily: 'DM Sans',
                  }}
                  whileHover={{ scale: 1.04, y: -1, background: 'rgba(212,184,150,0.1)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ExternalLink size={14} />
                  Cite
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Research Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid sm:grid-cols-3 gap-4"
        >
          {[
            { label: 'Focus Area', value: 'Healthcare AI & Diagnostics' },
            { label: 'Methodology', value: 'ML + Clinical Validation' },
            { label: 'Impact', value: 'Early disease screening' },
          ].map(item => (
            <div
              key={item.label}
              className="p-5 rounded-2xl text-center"
              style={{
                background: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(212,184,150,0.2)',
              }}
            >
              <p className="section-label mb-2" style={{ fontSize: '0.6rem' }}>{item.label}</p>
              <p className="text-sm font-medium" style={{ color: 'var(--espresso)', fontFamily: 'DM Sans' }}>
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
