import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Apps from './components/Apps.jsx'
import About from './components/About.jsx'
import Stack from './components/Stack.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        
        <Hero />
        <Stats />
        <Apps />
        <About />
        <Stack />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
