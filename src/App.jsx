import React from 'react'
import './app.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonails from './components/Testimonails'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header />
      <About />
      <Projects />
      <Testimonails />
      <Contact />
    </div>
  )
}

export default App