import { Mail, Phone, MapPin } from 'lucide-react'
import { profile } from '../../data/resume'
import { useLanguage } from '../../i18n/LanguageContext'
import { ui } from '../../i18n/ui'

export function Contact() {
  const { tx } = useLanguage()

  return (
    <section id="contact" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs text-text-dim">{tx(ui.contactEyebrow)}</p>
        <h2 className="mt-3 font-mono text-2xl font-semibold text-text sm:text-3xl">
          {tx(ui.contactHeading)}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-text-muted sm:text-base">
          {tx(ui.contactSubtitle)}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring flex items-center gap-2 rounded-md bg-amber px-5 py-3 font-mono text-sm font-medium text-ink transition-colors hover:bg-amber-dim"
          >
            <Mail size={16} />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="focus-ring flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm text-text-muted transition-colors hover:border-teal-dim hover:text-teal"
          >
            <Phone size={16} />
            {profile.phone}
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-1.5 font-mono text-xs text-text-dim">
          <MapPin size={13} />
          {profile.location}
        </div>
      </div>

      <footer className="mx-auto mt-20 max-w-5xl border-t border-border pt-6 text-center font-mono text-[11px] text-text-dim">
        © {new Date().getFullYear()} {profile.name}. {tx(ui.footerNote)}
      </footer>
    </section>
  )
}
