import { LogoMark } from '../brand/Logo'
import styles from './HeroNetwork.module.css'

type Svc = { id: string; x: number; y: number }

const HUB = { x: 180, y: 221 }
const CI = { x: 50, y: 221 }

const envs = [
  {
    key: 'dev',
    label: 'DEV',
    y: 24,
    svcs: [
      { id: 'web', x: 345, y: 110 },
      { id: 'api', x: 450, y: 72 },
      { id: 'db', x: 470, y: 150 },
    ] satisfies Svc[],
  },
  {
    key: 'prod',
    label: 'PROD',
    y: 246,
    svcs: [
      { id: 'web', x: 345, y: 332 },
      { id: 'api', x: 450, y: 294 },
      { id: 'db', x: 470, y: 372 },
    ] satisfies Svc[],
  },
]

const PILL_W = 72
const PILL_H = 26

const ciPath = `M${CI.x + 42} ${CI.y} H${HUB.x - 32}`
const hubTo = (s: Svc) => {
  const up = s.y < HUB.y
  const r = 10
  const bendX = 240
  const dy = up ? -r : r
  return `M${HUB.x + 32} ${HUB.y} H${bendX - r} Q${bendX} ${HUB.y} ${bendX} ${HUB.y + dy} V${s.y - dy} Q${bendX} ${s.y} ${bendX + r} ${s.y} H${s.x}`
}

/** Decorative: a deploy travelling from CI through Haven into isolated dev and prod networks. */
export function HeroNetwork() {
  return (
    <svg
      className={styles.net}
      viewBox="0 0 560 440"
      role="img"
      aria-label="A CI webhook triggers Haven, which deploys services into isolated dev and prod networks."
    >
      {/* environment boundaries */}
      {envs.map((e) => (
        <g key={e.key}>
          <rect className={styles.env} x="280" y={e.y} width="265" height="166" rx="8" />
          <text className={styles.envLabel} x="298" y={e.y + 24}>{e.label}</text>
          <text className={styles.envLabel} x="527" y={e.y + 24} textAnchor="end">isolated network</text>
        </g>
      ))}

      {/* links */}
      <path className={styles.link} d={ciPath} />
      {envs.map((e) => (
        <g key={e.key}>
          <path className={styles.link} d={hubTo(e.svcs[0])} />
          <path className={styles.link} d={`M${e.svcs[0].x} ${e.svcs[0].y} L${e.svcs[1].x} ${e.svcs[1].y}`} />
          <path className={styles.link} d={`M${e.svcs[1].x} ${e.svcs[1].y} L${e.svcs[2].x} ${e.svcs[2].y}`} />
          <path className={styles.link} d={`M${e.svcs[0].x} ${e.svcs[0].y} L${e.svcs[2].x} ${e.svcs[2].y}`} />
        </g>
      ))}

      {/* deploy pulses */}
      <circle className={`${styles.pulse} ${styles.pulseCi}`} r="4" style={{ offsetPath: `path('${ciPath}')` }} />
      <circle className={`${styles.pulse} ${styles.pulseDev}`} r="4" style={{ offsetPath: `path('${hubTo(envs[0].svcs[0])}')` }} />
      <circle className={`${styles.pulse} ${styles.pulseProd}`} r="4" style={{ offsetPath: `path('${hubTo(envs[1].svcs[0])}')` }} />

      {/* CI */}
      <g transform={`translate(${CI.x} ${CI.y})`}>
        <rect className={styles.pill} x="-42" y={-PILL_H / 2} width="84" height={PILL_H} rx="6" />
        <text className={styles.pillText} textAnchor="middle" y="4">git push</text>
        
      </g>

      {/* hub */}
      <g transform={`translate(${HUB.x} ${HUB.y})`}>
        <circle className={styles.halo} r="34" />
        <g className={styles.mark} transform="translate(-32 -32)">
          <LogoMark size={64} />
        </g>
      </g>

      {/* services */}
      {envs.map((e) =>
        e.svcs.map((s) => {
          const live = s.id === 'web'
          return (
            <g key={`${e.key}-${s.id}`} transform={`translate(${s.x} ${s.y})`}>
              <rect className={styles.pill} x={-PILL_W / 2} y={-PILL_H / 2} width={PILL_W} height={PILL_H} rx="6" />
              <circle
                className={`${styles.dot} ${live ? (e.key === 'dev' ? styles.dotDev : styles.dotProd) : ''}`}
                cx={-PILL_W / 2 + 14}
                cy="0"
                r="3.5"
              />
              <text className={styles.pillText} x={-PILL_W / 2 + 25} y="4">{s.id}</text>
            </g>
          )
        }),
      )}
    </svg>
  )
}
