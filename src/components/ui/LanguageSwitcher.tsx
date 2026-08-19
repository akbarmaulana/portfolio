import { useLanguage } from '../../i18n/LanguageContext'

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLanguage()

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center rounded-md border border-border bg-surface p-0.5 font-mono text-[11px] ${compact ? '' : ''}`}
    >
      {(['en', 'id'] as const).map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`focus-ring rounded px-2.5 py-1 uppercase tracking-wide transition-colors ${
            lang === code ? 'bg-amber text-ink' : 'text-text-muted hover:text-text'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  )
}
