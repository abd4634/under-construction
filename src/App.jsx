import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Layout/header'
import Home from './component/home'
import About from './component/about'
import Services from './component/services'
import Contact from './component/contact'

function App() {


  return (
    <>
     
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </Router>

      
    </>
  )
}

export default App
