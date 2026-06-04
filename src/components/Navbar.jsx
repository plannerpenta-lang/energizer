import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const links = [
    { to: '/', label: 'Inicio' },
    { to: '/productos', label: 'Productos' },
    { to: '/ganadores', label: 'Ganadores' },
    { to: '/terminos', label: 'Términos' },
  ]

  return (
    <nav className="bg-white border-b-4 border-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="border-2 border-black px-2 py-1">
                <span className="text-black font-black text-[10px] leading-tight block uppercase">Farmacias</span>
                <span className="text-black font-black text-[10px] leading-tight block uppercase">Guadalajara</span>
              </div>
              <span className="text-black font-black text-xl leading-none">×</span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Energizer_logo.svg/1280px-Energizer_logo.svg.png" alt="Energizer" className="h-7 w-auto" />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-bold uppercase tracking-wider transition-colors border-b-2 pb-0.5 ${
                    isActive ? 'text-[#EE3A43] border-[#EE3A43]' : 'text-black border-transparent hover:border-black'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <button
              onClick={() => navigate('/registrar')}
              className="btn-primary text-sm py-2 px-6"
            >
              Registrar Ticket
            </button>
          </div>

          <button className="md:hidden text-black p-2" onClick={() => setOpen(!open)} aria-label="Menú">
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t-2 border-black px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}
              className={({ isActive }) => `text-sm font-bold uppercase tracking-wider ${isActive ? 'text-[#EE3A43]' : 'text-black'}`}>
              {l.label}
            </NavLink>
          ))}
          <button onClick={() => { navigate('/registrar'); setOpen(false) }} className="btn-primary text-sm py-2 px-5 text-center">
            Registrar Ticket
          </button>
        </div>
      )}
    </nav>
  )
}
