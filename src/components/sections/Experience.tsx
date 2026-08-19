import { motion } from 'framer-motion'
import { experiences } from '../../data/resume'
import { SectionHeading } from '../ui/SectionHeading'
import { Tag } from '../ui/Tag'
import { useLanguage } from '../../i18n/LanguageContext'
import { ui } from '../../i18n/ui'

export function Experience() {
  const { tx } = useLanguage()

  return (
    <section id="experience" className="border-b border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          index="02"
          fileName="experience.ts"
          title={tx(ui.experienceHeading)}
          subtitle={tx(ui.experienceSubtitle)}
        />

        <ol className="relative space-y-10 border-l border-border pl-8 sm:pl-10">
          {experiences.map((exp, i) => (
            <motion.li
              key={exp.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative"
            >
              <span
                className={`absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 sm:-left-[49px] ${
                  exp.current ? 'border-amber bg-amber' : 'border-teal-dim bg-ink'
                }`}
              />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-mono text-lg font-medium text-text">{exp.role}</h3>
                <span className="font-mono text-xs text-text-dim">{exp.period}</span>
              </div>
              <p className="mt-0.5 font-mono text-sm text-amber">{exp.company}</p>

              <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-text-muted">
                {exp.responsibilities.map((r, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-dim" />
                    <span>{tx(r)}</span>
                  </li>
                ))}
              </ul>

              {exp.achievements.length > 0 && (
                <div className="mt-4 rounded-lg border border-border bg-surface/60 p-4">
                  <p className="font-mono text-[11px] uppercase tracking-wide text-teal">{tx(ui.keyAchievements)}</p>
                  <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-text-muted">
                    {exp.achievements.map((a, idx) => (
                      <li key={idx}>— {tx(a)}</li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.projects && exp.projects.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.projects.map((p) => (
                    <Tag key={p.name} variant="muted">
                      {p.name} · {p.stack}
                    </Tag>
                  ))}
                </div>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
