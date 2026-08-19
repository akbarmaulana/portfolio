import { education, languages } from '../../data/resume'
import { SectionHeading } from '../ui/SectionHeading'
import { Tag } from '../ui/Tag'
import { useLanguage } from '../../i18n/LanguageContext'
import { ui } from '../../i18n/ui'

export function Education() {
  const { tx } = useLanguage()

  return (
    <section id="education" className="border-b border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="05" fileName="education.yaml" title={tx(ui.educationHeading)} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-6">
            {education.map((ed) => (
              <div key={ed.id} className="rounded-lg border border-border bg-surface/50 p-5">
                <p className="font-mono text-sm font-medium text-text">{ed.school}</p>
                <p className="mt-1 text-sm text-text-muted">{tx(ed.degree)}</p>
                <div className="mt-3 flex items-center gap-3 font-mono text-xs text-text-dim">
                  <span>{ed.period}</span>
                  <span className="text-teal">GPA {ed.gpa}</span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-text-dim">{tx(ui.languagesLabel)}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {languages.map((lang) => (
                <Tag key={lang} variant="teal">
                  {lang}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
