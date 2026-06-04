import { useNavigate } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import StepCard from '../components/StepCard'
import PrizeCard from '../components/PrizeCard'
import WinnerRow from '../components/WinnerRow'
import Icon from '../components/Icon'

const STEPS = [
  { number: 1, icon: <Icon name="cart" size="lg" bg="red" />, title: 'Compra', description: 'Adquiere cualquier producto Energizer® en Farmacias Guadalajara participantes durante la vigencia de la promoción.' },
  { number: 2, icon: <Icon name="ticket" size="lg" bg="black" />, title: 'Registra', description: 'Ingresa a este sitio, llena el formulario con tus datos y sube una foto de tu ticket de compra.' },
  { number: 3, icon: <Icon name="target" size="lg" bg="red" />, title: 'Participa', description: 'Tu registro se valida automáticamente. Recibirás un correo de confirmación con tu folio de participación.' },
  { number: 4, icon: <Icon name="trophy" size="lg" bg="black" />, title: 'Gana', description: 'Cada semana se sortean premios instantáneos y al final de la campaña se anuncia el ganador del viaje.' },
]

const PRIZES = [
  { icon: <Icon name="plane" size="xl" bg="black" />, title: 'Viaje a Playa del Carmen', description: 'Para 2 personas — boletos de avión, hospedaje 5 noches en hotel todo incluido y traslados.', featured: true },
  { icon: <Icon name="phone" size="lg" bg="red" />, title: 'Smartphone Premium', description: '1 smartphone de alta gama cada semana de la campaña.' },
  { icon: <Icon name="headphones" size="lg" bg="black" />, title: 'Audífonos Inalámbricos', description: 'Audífonos premium con cancelación de ruido.' },
  { icon: <Icon name="tablet" size="lg" bg="red" />, title: 'Tablet', description: 'Tablet 10" con conectividad WiFi y 128 GB de almacenamiento.' },
  { icon: <Icon name="gift" size="lg" bg="black" />, title: 'Premios Instantáneos', description: 'Tarjetas de regalo, productos Energizer® y descuentos en Farmacias Guadalajara.' },
]

const WINNERS = [
  { name: 'María G.', city: 'Guadalajara, Jal.', prize: 'Smartphone Premium', date: '28 may 2026' },
  { name: 'Carlos M.', city: 'Ciudad de México', prize: 'Audífonos Inalámbricos', date: '21 may 2026' },
  { name: 'Ana L.', city: 'Monterrey, N.L.', prize: 'Tarjeta de Regalo $500', date: '14 may 2026' },
  { name: 'Roberto F.', city: 'Puebla, Pue.', prize: 'Smartphone Premium', date: '07 may 2026' },
  { name: 'Sofía T.', city: 'León, Gto.', prize: 'Tablet 10"', date: '30 abr 2026' },
]

export default function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <HeroSection />

      {/* Mecánica */}
      <section className="py-20 bg-white border-t-4 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#EE3A43] font-black uppercase tracking-widest text-sm mb-1">¿Cómo participar?</p>
            <h2 className="headline text-5xl md:text-6xl text-black">Mecánica de la promoción</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STEPS.map((s) => <StepCard key={s.number} {...s} />)}
          </div>
          <div className="mt-10">
            <button onClick={() => navigate('/registrar')} className="btn-primary">
              Registrar mi ticket ahora
            </button>
          </div>
        </div>
      </section>

      {/* Premios */}
      <section className="py-20 bg-[#EE3A43]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#FFF200] font-black uppercase tracking-widest text-sm mb-1">Lo que puedes ganar</p>
            <h2 className="headline text-5xl md:text-6xl text-white">Increíbles premios</h2>
            <p className="text-white/80 mt-2 max-w-xl text-lg font-semibold">Premios semanales instantáneos y el gran sorteo final.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRIZES.map((p) => <PrizeCard key={p.title} {...p} />)}
          </div>
        </div>
      </section>

      {/* Ganadores */}
      <section className="py-20 bg-[#FFF200]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-[#EE3A43] font-black uppercase tracking-widest text-sm mb-1">Ellos ya ganaron</p>
            <h2 className="headline text-5xl md:text-6xl text-black">Últimos ganadores</h2>
          </div>
          <div className="max-w-2xl bg-white border-4 border-black mb-8">
            {WINNERS.map((w) => <WinnerRow key={`${w.name}-${w.date}`} {...w} />)}
          </div>
          <button
            onClick={() => navigate('/ganadores')}
            className="bg-black text-[#FFF200] font-black py-3 px-8 uppercase tracking-wider hover:bg-[#EE3A43] transition-colors text-lg"
            style={{borderRadius: 0}}
          >
            Ver todos los ganadores
          </button>
        </div>
      </section>

      {/* Social CTA */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="headline text-6xl md:text-8xl text-white mb-2">SÍGUENOS EN REDES</h2>
          <p className="text-gray-400 mb-8 text-lg font-semibold uppercase tracking-wide">No te pierdas noticias, ganadores y sorteos especiales.</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 transition-colors" style={{borderRadius:0}}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a>
            <a href="#" className="flex items-center gap-2 text-white font-bold px-6 py-3 hover:opacity-80 transition-opacity" style={{background:'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)', borderRadius:0}}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
