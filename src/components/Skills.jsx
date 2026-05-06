import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Brain, Layers, Globe, HeartPulse, Network, Server, BarChart3, Cloud, FlaskConical
} from 'lucide-react'

const skillCategories = [
  {
    icon: Brain,
    title: 'Artificial Intelligence & ML',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'OpenCV', 'Transformers', 'ONNX'],
    accent: '#F2D8D8',
  },
  {
    icon: Layers,
    title: 'Reinforcement Learning',
    skills: ['PPO', 'MARL', 'Gymnasium', 'Ray RLlib', 'Policy Gradient', 'Tactical Simulation'],
    accent: '#FDF3C8',
  },
  {
    icon: Globe,
    title: 'Full Stack Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'FastAPI', 'Tailwind'],
    accent: '#EDE0D0',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare AI',
    skills: ['Clinical NLP', 'SOAP Notes', 'HL7 FHIR', 'Medical Ontologies', 'Risk Flagging', 'DICOM'],
    accent: '#F9E4E4',
  },
  {
    icon: Network,
    title: 'Networking & Systems',
    skills: ['TCP/IP', 'WebSockets', 'gRPC', 'REST APIs', 'Microservices', 'Edge Computing'],
    accent: '#EDE0D0',
  },
  {
    icon: Server,
    title: 'Backend Engineering',
    skills: ['Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis', 'Message Queues'],
    accent: '#FDF3C8',
  },
  {
    icon: BarChart3,
    title: 'Data Science',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter', 'Feature Engineering'],
    accent: '#F2D8D8',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'GitHub Actions'],
    accent: '#F9E4E4',
  },
  {
    icon: FlaskConical,
    title: 'Research & Simulation',
    skills: ['Multi-Agent Systems', 'Statistical Modeling', 'LaTeX', 'Peer Review', 'A/B Testing', 'Simulation Design'],
    accent: '#EDE0D0',
  },
]

const SkillCard = ({ category, index, inView }) => {
  const { icon: Icon, title, skills, accent } = category

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(92,61,46,0.12)' }}
      className="relative p-5 rounded-2xl overflow-hidden cursor-default transition-shadow"
      style={{
        background: 'rgba(255,255,255,0.75)',
        border: '1px solid rgba(212,184,150,0.2)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Accent blob */}
      <div
        className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-40"
        style={{ background: accent, filter: 'blur(20px)' }}
      />

      {/* Icon */}
      <div
        className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${accent}BB` }}
      >
        <Icon size={18} style={{ color: 'var(--mocha)' }} />
      </div>

      {/* Title */}
      <h3
        className="text-sm font-semibold mb-4"
        style={{ color: 'var(--espresso)', fontFamily: 'DM Sans' }}
      >
        {title}
      </h3>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5">
        {skills.map(skill => (
          <span
            key={skill}
            className="tag"
            style={{ fontSize: '0.65rem' }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--cream)' }}
    >
      {/* Orbs */}
      <div
        className="orb w-96 h-96 -top-32 -left-32 opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(253,243,200,0.5) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Technical Expertise</p>
          <h2 className="section-title text-4xl md:text-5xl">
            Tools of the{' '}
            <span className="italic" style={{ color: 'var(--mocha)' }}>Craft</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
