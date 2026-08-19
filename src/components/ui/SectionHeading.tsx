interface SectionHeadingProps {
  index: string
  fileName: string
  title: string
  subtitle?: string
}

export function SectionHeading({ index, fileName, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10 sm:mb-14">
      <div className="flex items-center gap-3 font-mono text-xs text-text-dim">
        <span className="text-teal">{index}</span>
        <span className="h-px flex-1 max-w-10 bg-border" />
        <span>{fileName}</span>
      </div>
      <h2 className="mt-3 font-mono text-2xl font-semibold text-text sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  )
}
