import { skillGroups } from '../../data/resume'
import { SectionHeading } from '../ui/SectionHeading'
import { Tag } from '../ui/Tag'
import { useLanguage } from '../../i18n/LanguageContext'
import { ui } from '../../i18n/ui'

export function Skills() {
  const { tx } = useLanguage()

  return (
    <section id="skills" className="border-b border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="04" fileName="skills.json" title={tx(ui.skillsHeading)} />

        <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.id}>
              <p className="font-mono text-xs uppercase tracking-wide text-text-dim">
                "{tx(group.label)}"
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item} variant="muted">
                    {item}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
