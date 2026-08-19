import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import { profile } from '../../data/resume'
import { ArchitectureRings } from '../ui/ArchitectureRings'
import { useLanguage } from '../../i18n/LanguageContext'
import { ui } from '../../i18n/ui'

export function Hero() {
  const { tx } = useLanguage()

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-border px-6 pt-20 lg:pt-0"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            {tx(ui.availableBadge)}
          </div>

          <p className="font-mono text-sm text-teal">// about.md</p>
          <h1 className="mt-3 text-4xl font-semibold leading-[1.1] text-text sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-mono text-base text-amber sm:text-lg">
            {profile.title}
          </p>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-text-muted sm:text-base">
            {tx(profile.summary[0])}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="focus-ring group inline-flex items-center gap-2 rounded-md bg-amber px-5 py-3 font-mono text-sm font-medium text-ink transition-colors hover:bg-amber-dim"
            >
              {tx(ui.heroCta)}
              <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring rounded-md border border-border px-5 py-3 font-mono text-sm text-text-muted transition-colors hover:border-teal-dim hover:text-teal"
            >
              {profile.email}
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wide text-text-dim">{tx(ui.statExperience)}</dt>
              <dd className="mt-1 font-mono text-xl text-text">{profile.yearsExperience}+ yrs</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wide text-text-dim">{tx(ui.statIndustries)}</dt>
              <dd className="mt-1 font-mono text-xl text-text">6</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wide text-text-dim">{tx(ui.statStack)}</dt>
              <dd className="mt-1 font-mono text-xl text-text">Flutter</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="hidden sm:block"
        >
          <ArchitectureRings />
        </motion.div>
      </div>
    </section>
  )
}
