import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    company: 'Labmentix',
    role: 'AI/ML Engineer Intern',
    period: '2024',
    type: 'Full-time Internship',
    location: 'Remote',
    desc: 'Built and deployed ML models for production use cases, working with computer vision and NLP pipelines. Contributed to real-world AI systems serving enterprise clients.',
    skills: ['PyTorch', 'NLP', 'Computer Vision', 'FastAPI'],
    accent: '#F2D8D8',
  },
  {
    company: 'Infotact Solutions',
    role: 'Software Development Intern',
    period: '2024',
    type: 'Internship',
    location: 'Remote',
    desc: 'Developed full-stack web features and REST APIs, focusing on scalable backend architecture and performance optimization for client-facing applications.',
    skills: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
    accent: '#FDF3C8',
  },
  {
    company: 'VR Academy',
    role: 'Technical Instructor',
    period: '2023 — 2024',
    type: 'Part-time',
    location: 'Bengaluru',
    desc: 'Designed and delivered workshops on Python, Machine Learning fundamentals, and Data Science to engineering students. Created learning resources and mentored junior developers.',
    skills: ['Python', 'Machine Learning', 'Curriculum Design', 'Mentoring'],
    accent: '#EDE0D0',
  },
  {
    company: 'Bluestock Fintech',
    role: 'Software Engineer Intern',
    period: '2023',
    type: 'Internship',
    location: 'Remote',
    desc: 'Worked on fintech-grade data pipelines and analytical dashboards, implementing real-time data processing and visualization for financial analytics platforms.',
    skills: ['Python', 'Data Pipelines', 'SQL', 'Visualization'],
    accent: '#F9E4E4',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--cream)' }}
    >
      <div
        className="orb w-72 h-72 top-20 -left-20 opacity-30"
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
          <p className="section-label mb-3">Career Journey</p>
          <h2 className="section-title text-4xl md:text-5xl">
            Where I've{' '}
            <span className="italic" style={{ color: 'var(--mocha)' }}>Contributed</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div
            className="hidden md:block absolute left-[220px] top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,184,150,0.5), transparent)' }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative md:grid md:grid-cols-[200px_1fr] gap-8 items-start"
              >
                {/* Left — Company info */}
                <div className="mb-4 md:mb-0 md:text-right pr-0 md:pr-8">
                  <div className="flex items-center gap-2 md:justify-end mb-1">
                    <Calendar size={12} style={{ color: 'var(--sand)' }} />
                    <span className="text-xs" style={{ color: 'var(--sand)', fontFamily: 'DM Sans' }}>
                      {exp.period}
                    </span>
                  </div>
                  <h3
                    className="font-display text-xl font-semibold"
                    style={{ color: 'var(--espresso)' }}
                  >
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1 md:justify-end">
                    <MapPin size={11} style={{ color: 'var(--sand)' }} />
                    <span className="text-xs" style={{ color: 'var(--mocha)', fontFamily: 'DM Sans', opacity: 0.7 }}>
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Timeline dot */}
                <div
                  className="hidden md:block absolute left-[214px] w-3 h-3 rounded-full border-2 top-3"
                  style={{
                    background: exp.accent,
                    borderColor: 'rgba(212,184,150,0.6)',
                    boxShadow: `0 0 10px ${exp.accent}80`,
                  }}
                />

                {/* Right — Content */}
                <motion.div
                  className="p-6 rounded-2xl"
                  style={{
                    background: 'rgba(255,255,255,0.75)',
                    border: '1px solid rgba(212,184,150,0.2)',
                  }}
                  whileHover={{ boxShadow: '0 10px 30px rgba(92,61,46,0.08)', y: -3 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                        style={{ background: `${exp.accent}CC` }}
                      >
                        <Briefcase size={15} style={{ color: 'var(--mocha)' }} />
                      </div>
                      <h4
                        className="font-semibold text-sm"
                        style={{ color: 'var(--espresso)', fontFamily: 'DM Sans' }}
                      >
                        {exp.role}
                      </h4>
                    </div>
                    <span
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        background: `${exp.accent}80`,
                        color: 'var(--mocha)',
                        fontFamily: 'DM Sans',
                        fontSize: '0.65rem',
                        fontWeight: 500,
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: 'var(--mocha)', fontFamily: 'DM Sans', opacity: 0.9 }}
                  >
                    {exp.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map(skill => (
                      <span key={skill} className="tag" style={{ fontSize: '0.65rem', background: `${exp.accent}60` }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
