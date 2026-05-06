import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Zap, HeartPulse, Mic, Brain } from 'lucide-react'

const projects = [
  {
    id: 1,
    icon: Zap,
    label: '01 — Reinforcement Learning',
    title: 'OpenEnv',
    subtitle: 'Multi-Agent Emergency Intelligence Simulator',
    description:
      'A real-time multi-agent emergency coordination simulator for adversarial urban crisis environments. Powered by PPO-based adaptive decision systems that learn, coordinate, and respond dynamically to evolving threats.',
    features: [
      'Dynamic threat prioritization',
      'Multi-agent coordination',
      'Tactical visualization',
      'Adaptive routing logic',
      'Human-in-loop workflows',
      'Real-time simulation engine',
    ],
    tech: ['Reinforcement Learning', 'MARL', 'PPO', 'Python', 'Tactical Simulation'],
    accent: '#FDF3C8',
    accentDark: '#C9A882',
    github: 'https://github.com/ViivianREINE',
    style: 'futuristic',
  },
  {
    id: 2,
    icon: HeartPulse,
    label: '02 — Healthcare AI',
    title: 'Vineetra',
    subtitle: 'Multilingual Clinical Intelligence Infrastructure',
    description:
      'A real-time multilingual clinical documentation infrastructure that generates structured SOAP notes from doctor–patient conversations in regional Indian languages — making AI healthcare accessible at scale.',
    features: [
      'Real-time transcription',
      'Medical NLP',
      'Clinical summarization',
      'Risk flagging',
      'Offline-capable workflows',
      'Low-resource optimization',
    ],
    tech: ['Healthcare AI', 'NLP', 'LLM Engineering', 'Python', 'Real-Time Systems'],
    accent: '#F2D8D8',
    accentDark: '#B08585',
    github: 'https://github.com/ViivianREINE/Vineetra-Bharat',
    style: 'healthcare',
  },
  {
    id: 3,
    icon: Brain,
    label: '03 — Published Research',
    title: "Parkinson's Detection",
    subtitle: 'Early Detection via Voice Signal Analysis',
    description:
      `ML models for early Parkinson's disease detection using voice signal biomarkers and clinically validated metrics. Research backed by a peer-reviewed publication, bridging machine learning and medical diagnostics.`,
    features: [
      'Voice signal analysis',
      'Clinical ML workflows',
      'ROC-AUC evaluation',
      'SVM & Random Forest',
      'Validation pipelines',
      'Published research paper',
    ],
    tech: ['Machine Learning', 'Healthcare AI', 'Signal Processing', 'SVM', 'Random Forest'],
    accent: '#EDE0D0',
    accentDark: '#9B7E6A',
    github: 'https://github.com/ViivianREINE',
    learnMore: 'https://www.researchgate.net/publication/394926692_Machine_Learning-Based_Early_Detection_of_Parkinson\'s_Disease_Using_Voice_Features',
    learnMoreLabel: 'Read Paper',
    style: 'research',
    badge: 'Peer Reviewed',
  },
]

const ProjectCard = ({ project, index, inView }) => {
  const { icon: Icon, label, title, subtitle, description, features, tech, accent, accentDark, github, learnMore, learnMoreLabel, badge } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="project-card group relative overflow-hidden rounded-3xl flex h-full flex-col"
      style={{
        background: 'rgba(255,255,255,0.85)',
        border: '1px solid rgba(212,184,150,0.2)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Background accent blob */}
      <div
        className="absolute top-0 right-0 w-48 h-48 opacity-40 pointer-events-none"
        style={{ background: `radial-gradient(circle at top right, ${accent} 0%, transparent 70%)` }}
      />

      <div className="relative p-8 flex h-full flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="section-label mb-2" style={{ fontSize: '0.65rem' }}>{label}</p>
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: `${accent}CC` }}
            >
              <Icon size={22} style={{ color: accentDark }} />
            </div>
          </div>

          {badge && (
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: 'rgba(212,184,150,0.2)',
                color: 'var(--mocha)',
                border: '1px solid rgba(212,184,150,0.4)',
                fontFamily: 'DM Sans',
                fontSize: '0.68rem',
              }}
            >
              {badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="font-display text-3xl font-semibold mb-1"
          style={{ color: 'var(--espresso)' }}
        >
          {title}
        </h3>
        <p
          className="text-sm mb-5 font-medium"
          style={{ color: accentDark, fontFamily: 'DM Sans' }}
        >
          {subtitle}
        </p>

        {/* Divider */}
        <div className="divider mb-5" />

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: 'var(--mocha)', fontFamily: 'DM Sans' }}
        >
          {description}
        </p>

        {/* Features grid */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {features.map(f => (
            <div key={f} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accentDark }} />
              <span className="text-xs" style={{ color: 'var(--mocha)', fontFamily: 'DM Sans' }}>
                {f}
              </span>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tech.map(t => (
            <span key={t} className="tag" style={{ fontSize: '0.65rem', background: `${accent}60` }}>
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center gap-3">
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all"
            style={{
              background: 'var(--espresso)',
              color: 'var(--cream)',
              fontFamily: 'DM Sans',
            }}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github size={13} />
            View Code
          </motion.a>

          {learnMore ? (
            <motion.a
              href={learnMore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium"
              style={{
                border: `1px solid ${accentDark}40`,
                color: accentDark,
                fontFamily: 'DM Sans',
              }}
              whileHover={{ scale: 1.04, y: -1, background: `${accent}40` }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink size={13} />
              {learnMoreLabel || 'Learn More'}
            </motion.a>
          ) : (
            <motion.button
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium"
              style={{
                border: `1px solid ${accentDark}40`,
                color: accentDark,
                fontFamily: 'DM Sans',
              }}
              whileHover={{ scale: 1.04, y: -1, background: `${accent}40` }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink size={13} />
              Learn More
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--ivory)' }}
    >
      {/* Orbs */}
      <div
        className="orb w-96 h-96 -bottom-20 -left-20 opacity-40"
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
          <p className="section-label mb-3">Featured Work</p>
          <h2 className="section-title text-4xl md:text-5xl">
            Systems Built with{' '}
            <span className="italic" style={{ color: 'var(--mocha)' }}>Intention</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
