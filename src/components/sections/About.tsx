import { profile } from '../../data/resume'
import { useLanguage } from '../../i18n/LanguageContext'
import { ui } from '../../i18n/ui'

export function About() {
  const { tx } = useLanguage()

  return (
    <section className="border-b border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-3 font-mono text-xs text-text-dim">
          <span className="text-teal">01</span>
          <span className="h-px flex-1 max-w-10 bg-border" />
          <span>{tx(ui.aboutFileNote)}</span>
        </div>
        <div className="mt-6 space-y-5 text-sm leading-relaxed text-text-muted sm:text-base">
          {profile.summary.slice(1).map((paragraph, i) => (
            <p key={i}>{tx(paragraph)}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
