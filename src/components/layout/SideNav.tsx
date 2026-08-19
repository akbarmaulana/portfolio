import { useState } from 'react'
import { Menu, X, FileCode2, Folder } from 'lucide-react'
import { navSections, profile } from '../../data/resume'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { useLanguage } from '../../i18n/LanguageContext'
import { ui } from '../../i18n/ui'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'

export function SideNav() {
  const [open, setOpen] = useState(false)
  const activeId = useScrollSpy(navSections.map((s) => s.id))
  const { tx } = useLanguage()

  const handleNavigate = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const NavList = (
    <nav aria-label="Section navigation" className="flex flex-col gap-0.5">
      {navSections.map((section) => {
        const isActive = activeId === section.id
        const Icon = section.fileName.endsWith('/') ? Folder : FileCode2
        return (
          <button
            key={section.id}
            onClick={() => handleNavigate(section.id)}
            className={`focus-ring group flex items-center gap-2.5 rounded-md px-3 py-2 text-left font-mono text-[13px] transition-colors ${
              isActive
                ? 'bg-surface-2 text-amber'
                : 'text-text-muted hover:bg-surface-2/60 hover:text-text'
            }`}
          >
            <Icon
              size={14}
              className={isActive ? 'text-amber' : 'text-text-dim group-hover:text-teal'}
            />
            <span>{section.fileName}</span>
          </button>
        )
      })}
    </nav>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-64 flex-col border-r border-border bg-ink-2/80 backdrop-blur-sm lg:flex">
        <div className="flex items-center justify-between gap-2 border-b border-border px-5 py-6">
          <div>
            <p className="font-mono text-sm text-text">{profile.name}</p>
            <p className="mt-1 font-mono text-[11px] text-text-dim">~/portfolio</p>
          </div>
        </div>
        <div className="border-b border-border px-5 py-3">
          <LanguageSwitcher />
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-4">{NavList}</div>
        <div className="border-t border-border px-5 py-4 font-mono text-[11px] text-text-dim">
          <span className="text-teal">●</span> {profile.yearsExperience}+ {tx(ui.navExperienceLabel)}
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between gap-3 border-b border-border bg-ink-2/90 px-4 py-3 backdrop-blur-sm lg:hidden">
        <span className="font-mono text-sm text-text">{profile.name}</span>
        <div className="flex items-center gap-2">
          <LanguageSwitcher compact />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="focus-ring rounded-md p-2 text-text-muted hover:text-text"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="fixed inset-x-0 top-[52px] z-40 border-b border-border bg-ink-2 px-3 py-4 lg:hidden">
          {NavList}
        </div>
      )}
    </>
  )
}
