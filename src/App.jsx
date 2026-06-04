import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Productos from './pages/Productos'
import RegistrarTicket from './pages/RegistrarTicket'
import Ganadores from './pages/Ganadores'
import Terminos from './pages/Terminos'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-black">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/registrar" element={<RegistrarTicket />} />
            <Route path="/ganadores" element={<Ganadores />} />
            <Route path="/terminos" element={<Terminos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
