import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import './App.scss'
import Particle from './components/Particle/particle'

function App() {
  return (
    <>
      <Routes>
        <Route path="/my-website" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/my-website/about" element={<About />} />
          <Route path="/my-website/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Particle/>
    </>
  )
}

export default App
