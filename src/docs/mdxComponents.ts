import { Badge, Table, TBody, TD, TH, THead, TR } from '../components'
import { Anchor, Callout, Pre } from './mdxParts'

/** Everything here is available in every .mdx page without importing. */
export const mdxComponents = {
  pre: Pre,
  a: Anchor,
  table: Table,
  thead: THead,
  tbody: TBody,
  tr: TR,
  th: TH,
  td: TD,
  Callout,
  Badge,
}
