import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Products from './components/sections/Products'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import './styles/variables.css'
import './styles/global.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
