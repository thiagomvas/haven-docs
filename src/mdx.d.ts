declare module '*.mdx' {
  import type { ComponentType } from 'react'
  export const frontmatter: Record<string, unknown>
  const Component: ComponentType<{ components?: Record<string, unknown> }>
  export default Component
}
