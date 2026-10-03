import { Dot } from 'lucide-react'
import { Fragment } from 'react'
import s from './Features.shared.module.css'

/** Secondary mono text with lucide separators between its parts. */
export function Meta({ parts }: { parts: string[] }) {
  return (
    <span className={s.meta}>
      {parts.map((p, i) => (
        <Fragment key={p}>
          {i > 0 && <Dot size={16} className={s.sep} aria-hidden="true" />}
          {p}
        </Fragment>
      ))}
    </span>
  )
}
