import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'
import rehypeShiki from '@shikijs/rehype'
import rehypeSlug from 'rehype-slug'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        // defaultColor: false emits CSS variables so the site theme toggle picks the palette.
        [rehypeShiki, { themes: { light: 'github-light', dark: 'github-dark' }, defaultColor: false }],
      ],
    }),
    react(),
  ],
})
