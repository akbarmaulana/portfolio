import { motion } from 'framer-motion'
import { projects } from '../../data/resume'
import { SectionHeading } from '../ui/SectionHeading'
import { Tag } from '../ui/Tag'
import { useLanguage } from '../../i18n/LanguageContext'
import { ui } from '../../i18n/ui'

export function Projects() {
  const { tx } = useLanguage()

  return (
    <section id="projects" className="border-b border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="03"
          fileName="projects/"
          title={tx(ui.projectsHeading)}
          subtitle={tx(ui.projectsSubtitle)}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
              className="group rounded-lg border border-border bg-surface/50 p-5 transition-colors hover:border-teal-dim/60 hover:bg-surface"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-mono text-base font-medium text-text">{project.name}</h3>
                <Tag variant="amber">{tx(project.category)}</Tag>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{tx(project.description)}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <Tag key={s} variant="teal">
                    {s}
                  </Tag>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
