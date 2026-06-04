import { useNavigate } from 'react-router-dom'

export default function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left */}
          <div>
            <div className="inline-block bg-[#EE3A43] px-4 py-2 mb-4">
              <span className="text-white font-black text-sm uppercase tracking-widest">
                ● Vigente: 01 Abr – 17 Jul 2026
              </span>
            </div>

            <h1 className="headline text-[7rem] sm:text-[9rem] md:text-[11rem] text-black leading-[0.85] block">
              REGISTRA
            </h1>
            <h1 className="headline text-[7rem] sm:text-[9rem] md:text-[11rem] text-[#EE3A43] leading-[0.85] block mb-6">
              Y GANA
            </h1>

            <p className="text-black text-xl md:text-2xl max-w-xl mb-5 leading-snug font-semibold italic">
              Compra Energizer® en Farmacias Guadalajara, registra tu ticket y participa por premios increíbles.
            </p>

            <div className="flex items-start gap-3 bg-[#FFF200] border-l-4 border-black px-4 py-3 mb-6 max-w-xl">
              <span className="text-black text-lg flex-shrink-0">⚠</span>
              <p className="text-black text-sm font-bold">
                Conserva todos tus empaques y facturas — serán solicitados para entregar el premio.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button onClick={() => navigate('/registrar')} className="btn-primary">
                Registra tu ticket
              </button>
              <button onClick={() => navigate('/productos')} className="btn-outline">
                Ver productos
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Pilas AA', 'Pilas AAA', 'Pilas 9V', 'Cargadores', 'Linternas', 'Pilas D/C'].map((badge) => (
                <span key={badge} className="border-l-4 border-[#EE3A43] bg-[#F5F5F5] text-black text-sm px-3 py-1.5 font-bold uppercase tracking-wide">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right — prize block */}
          <div className="hidden lg:block">
            <div className="bg-[#EE3A43] p-10 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#FFF200]" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
              <div className="relative z-10 text-center">
                <div className="text-8xl mb-4">✈️</div>
                <p className="headline text-2xl text-white/80 tracking-widest mb-0">GANA UN VIAJE A</p>
                <p className="headline text-5xl md:text-6xl text-[#FFF200] leading-none mb-2">PLAYA DEL<br/>CARMEN</p>
                <p className="headline text-xl text-white tracking-widest mb-6">PARA 2 PERSONAS</p>
                <div className="inline-block bg-black px-4 py-2">
                  <span className="text-[#FFF200] font-black text-sm uppercase tracking-wider">+ Tecnología Premium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="bg-black py-2 overflow-hidden">
        <p className="text-[#FFF200] font-black italic text-sm tracking-widest uppercase text-center">
          ★ COMPRA ENERGIZER® EN FARMACIAS GUADALAJARA ★ REGISTRA TU TICKET ★ GANA INCREÍBLES PREMIOS ★ COMPRA ENERGIZER® EN FARMACIAS GUADALAJARA ★
        </p>
      </div>
    </section>
  )
}
