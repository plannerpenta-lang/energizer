import { useNavigate } from 'react-router-dom'

export default function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className="relative overflow-hidden bg-black min-h-[90vh] flex flex-col justify-center">
      {/* Speed lines SVG background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <line x1="-10%" y1="15%" x2="110%" y2="10%" stroke="#FFF200" strokeWidth="1.5" opacity="0.18" />
        <line x1="-10%" y1="25%" x2="110%" y2="19%" stroke="#F8A723" strokeWidth="1" opacity="0.15" />
        <line x1="-10%" y1="35%" x2="110%" y2="28%" stroke="#FFF200" strokeWidth="2" opacity="0.12" />
        <line x1="-10%" y1="48%" x2="110%" y2="40%" stroke="#F8A723" strokeWidth="1" opacity="0.20" />
        <line x1="-10%" y1="58%" x2="110%" y2="51%" stroke="#FFF200" strokeWidth="1.5" opacity="0.14" />
        <line x1="-10%" y1="68%" x2="110%" y2="62%" stroke="#F8A723" strokeWidth="2" opacity="0.10" />
        <line x1="-10%" y1="78%" x2="110%" y2="72%" stroke="#FFF200" strokeWidth="1" opacity="0.16" />
        <line x1="-10%" y1="88%" x2="110%" y2="83%" stroke="#F8A723" strokeWidth="1.5" opacity="0.12" />
        <line x1="20%" y1="-5%" x2="10%" y2="105%" stroke="#EE3A43" strokeWidth="1" opacity="0.08" />
        <line x1="50%" y1="-5%" x2="42%" y2="105%" stroke="#EE3A43" strokeWidth="1" opacity="0.06" />
        <line x1="80%" y1="-5%" x2="72%" y2="105%" stroke="#EE3A43" strokeWidth="1" opacity="0.08" />
      </svg>

      {/* Red gradient overlay left side */}
      <div className="absolute inset-0 bg-gradient-to-r from-energizer-red/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column */}
          <div>
            {/* Badge vigencia */}
            <div className="inline-flex items-center gap-2 bg-energizer-red px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-energizer-yellow rounded-full animate-pulse" />
              <span className="text-white text-sm font-bold uppercase tracking-wider">Vigente: 01 Abr – 17 Jul 2026</span>
            </div>

            {/* Headline */}
            <h1 className="headline text-8xl md:text-[10rem] lg:text-[12rem] text-white leading-none mb-0 block">
              REGISTRA
            </h1>
            <h1
              className="headline text-8xl md:text-[10rem] lg:text-[12rem] leading-none mb-6 block"
              style={{ color: '#FFF200', WebkitTextStroke: '2px #EE3A43' }}
            >
              Y GANA
            </h1>

            {/* Subheadline */}
            <p className="text-gray-200 text-xl md:text-2xl max-w-xl mb-4 leading-snug italic font-semibold">
              Compra Energizer® en Farmacias Guadalajara, registra tu ticket y participa para ganar
              un <span className="text-energizer-yellow not-italic font-black">viaje a Playa del Carmen</span>, tecnología premium y muchos premios instantáneos.
            </p>

            {/* Alert banner */}
            <div className="flex items-start gap-3 bg-[#b85a00] border-l-4 border-energizer-orange px-5 py-3 mb-8 max-w-xl">
              <span className="text-energizer-yellow text-xl flex-shrink-0 mt-0.5">⚠</span>
              <p className="text-white text-sm font-semibold">
                Conserva todos tus empaques y facturas registradas — serán solicitados para entregar el premio.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => navigate('/registrar')}
                className="btn-primary text-base py-4 px-10 text-center"
              >
                Registra tu ticket y gana
              </button>
              <button
                onClick={() => navigate('/productos')}
                className="border-2 border-white text-white font-bold py-4 px-10 rounded-none uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-200"
              >
                Ver productos
              </button>
            </div>

            {/* Product badges */}
            <div className="flex flex-wrap gap-3">
              {['Pilas AA', 'Pilas AAA', 'Pilas 9V', 'Cargadores', 'Linternas', 'Pilas D/C'].map((badge) => (
                <span
                  key={badge}
                  className="border-l-4 border-energizer-yellow bg-white/5 text-white text-sm px-4 py-2 font-semibold uppercase tracking-wide"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right column — decorative shield */}
          <div className="hidden lg:flex items-center justify-center relative">
            {/* Speed lines behind shield */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full border border-energizer-yellow/10 absolute" />
              <div className="w-96 h-96 rounded-full border border-energizer-orange/10 absolute" />
            </div>
            <div className="relative flex flex-col items-center justify-center w-72 h-72 bg-gradient-to-br from-energizer-red to-[#aa1a22]"
              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
              <span className="headline text-[6rem] text-energizer-yellow leading-none">E</span>
              <span className="headline text-2xl text-white tracking-widest">ENERGIZER</span>
              <span className="text-energizer-yellow text-sm font-bold uppercase tracking-wider mt-1">x Farmacias Gpe</span>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal red stripe */}
      <div
        className="absolute w-[120%] left-[-10%] py-3 text-center"
        style={{
          background: '#EE3A43',
          transform: 'rotate(-2deg)',
          top: '43%',
          zIndex: 10,
        }}
      >
        <span className="text-white font-black italic text-sm md:text-base tracking-widest uppercase">
          ★ VIGENTE DEL 01 ABR AL 17 JUL 2026 ★ VIGENTE DEL 01 ABR AL 17 JUL 2026 ★ VIGENTE DEL 01 ABR AL 17 JUL 2026 ★
        </span>
      </div>
    </section>
  )
}
