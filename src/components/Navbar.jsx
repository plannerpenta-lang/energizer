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
    <nav className="sticky top-0 z-50 shadow-lg" style={{ background: '#CC1F28' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logos */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {/* Farmacias Guadalajara wordmark */}
              <div className="bg-white px-2 py-1">
                <span className="text-energizer-red font-black text-xs leading-tight block">FARMACIAS</span>
                <span className="text-energizer-red font-black text-xs leading-tight block">GUADALAJARA</span>
              </div>
              <span className="text-white font-black text-lg">×</span>
              {/* Energizer wordmark */}
              <div className="bg-energizer-yellow px-2 py-1">
                <span className="headline text-energizer-black text-xl tracking-widest">ENERGIZER</span>
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `font-bold uppercase tracking-wider text-sm transition-all relative group ${
                    isActive ? 'text-energizer-yellow' : 'text-white hover:text-energizer-yellow'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      className="absolute -bottom-1 left-0 h-0.5 bg-energizer-yellow transition-all duration-300"
                      style={{ width: isActive ? '100%' : '0%' }}
                    />
                  </>
                )}
              </NavLink>
            ))}
            <button
              onClick={() => navigate('/registrar')}
              className="bg-energizer-yellow text-black font-black py-2 px-5 rounded-none uppercase tracking-wider text-sm border-2 border-black hover:brightness-110 transition-all"
              style={{ boxShadow: '2px 2px 0px #000' }}
            >
              Registrar Ticket
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black px-4 py-4 flex flex-col gap-4 border-t-2 border-energizer-yellow">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-bold uppercase tracking-wider text-sm ${
                  isActive ? 'text-energizer-yellow' : 'text-white'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <button
            onClick={() => { navigate('/registrar'); setOpen(false) }}
            className="bg-energizer-yellow text-black font-black py-2 px-5 rounded-none uppercase tracking-wider text-sm border-2 border-black text-center"
          >
            Registrar Ticket
          </button>
        </div>
      )}
    </nav>
  )
}
