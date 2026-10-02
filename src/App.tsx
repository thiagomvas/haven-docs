import { Features, Footer, Hero, TopBar } from './components/landing'

export default function App() {
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
