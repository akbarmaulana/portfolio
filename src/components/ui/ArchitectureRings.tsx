import { motion } from 'framer-motion'

/**
 * Signature visual: concentric layers echoing Clean Architecture
 * (Presentation -> Domain -> Data), the pattern that recurs across
 * every role on the resume. Doubles as the hero's centerpiece.
 */
export function ArchitectureRings() {
  const layers = [
    { r: 150, label: 'PRESENTATION', dur: 40 },
    { r: 110, label: 'DOMAIN', dur: 32 },
    { r: 70, label: 'DATA', dur: 24 },
  ]

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <svg viewBox="0 0 360 360" className="h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D9A441" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#D9A441" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="180" cy="180" r="170" fill="url(#coreGlow)" />
        {layers.map((layer, i) => (
          <circle
            key={layer.label}
            cx="180"
            cy="180"
            r={layer.r}
            fill="none"
            stroke={i === layers.length - 1 ? '#D9A441' : '#26313f'}
            strokeWidth={i === layers.length - 1 ? 1.5 : 1}
            strokeDasharray={i === 0 ? '2 6' : i === 1 ? '1 4' : undefined}
          />
        ))}
        <circle cx="180" cy="180" r="30" fill="#161f2c" stroke="#4FD1C5" strokeWidth="1.5" />
        <text x="180" y="184" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="11" fill="#4FD1C5">
          AM
        </text>
      </svg>

      {layers.map((layer, i) => (
        <motion.div
          key={layer.label}
          className="absolute left-1/2 top-1/2 font-mono text-[9px] tracking-[0.2em] text-text-dim"
          style={{
            marginLeft: -60,
            marginTop: -(layer.r / 360) * 360 - 8,
            width: 120,
            textAlign: 'center',
          }}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ repeat: Infinity, ease: 'easeInOut', duration: 5 + i * 1.5, delay: i * 0.6 }}
        >
          {layer.label}
        </motion.div>
      ))}
    </div>
  )
}
