import type { ComponentProps, ReactElement, ReactNode } from 'react'
import { Link } from 'react-router'
import { Banner, CodeBlock } from '../components'
import type { BannerVariant } from '../components/ui/Banner'

/** Flattens highlighted (Shiki) children back to the raw text for the copy button. */
function textOf(node: ReactNode): string {
  if (node == null || typeof node === 'boolean') return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(textOf).join('')
  return textOf((node as ReactElement<{ children?: ReactNode }>).props?.children)
}

export function Pre({ children }: ComponentProps<'pre'>) {
  const code = (children as ReactElement<{ children?: ReactNode }>)?.props?.children
  return (
    <CodeBlock code={textOf(code).replace(/\n$/, '')}>
      {code}
    </CodeBlock>
  )
}

export function Anchor({ href = '', ...rest }: ComponentProps<'a'>) {
  // Site-internal links navigate client-side; everything else opens normally.
  if (href.startsWith('/') || href.startsWith('#')) return <Link to={href} {...rest} />
  return <a href={href} target="_blank" rel="noopener noreferrer" {...rest} />
}

/** `<Callout type="warning" title="Heads up">…</Callout>` */
export function Callout({ type = 'info', title, children }: { type?: BannerVariant; title?: string; children?: ReactNode }) {
  return <Banner variant={type} title={title}>{children}</Banner>
}
