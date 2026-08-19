interface TagProps {
  children: React.ReactNode
  variant?: 'amber' | 'teal' | 'muted'
}

const variantClasses: Record<NonNullable<TagProps['variant']>, string> = {
  amber: 'text-amber border-amber-dim/40 bg-amber/10',
  teal: 'text-teal border-teal-dim/40 bg-teal/10',
  muted: 'text-text-muted border-border bg-surface-2/60',
}

export function Tag({ children, variant = 'muted' }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[11px] tracking-tight ${variantClasses[variant]}`}
    >
      {children}
    </span>
  )
}
