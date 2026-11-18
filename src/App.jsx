import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import Solutions from './components/Solutions'
import useReveal from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido" tabIndex="-1">
        <Hero />
        <Marquee />
        <About />
        <Manifesto />
        <Solutions />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
