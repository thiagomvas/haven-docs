import { lazy } from 'react'
import { Route, Routes } from 'react-router'
import { Features, Footer, Hero, TopBar } from './components/landing'

const DocsPage = lazy(() => import('./docs/DocsPage'))

function Landing() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/docs/*" element={<DocsPage />} />
    </Routes>
  )
}
