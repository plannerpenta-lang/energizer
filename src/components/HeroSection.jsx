import { useNavigate } from 'react-router-dom'

export default function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-energizer-red/20 via-black to-black pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-energizer-yellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-energizer-red/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        {/* Badge vigencia */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-white text-sm font-medium">Vigente: 01 Abr – 17 Jul 2026</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight text-white leading-none mb-2">
          REGISTRA
        </h1>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight leading-none mb-6"
          style={{ WebkitTextStroke: '2px #FFF200', color: 'transparent' }}>
          Y GANA
        </h1>

        {/* Subheadline */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
          Compra Energizer® en Farmacias Guadalajara, registra tu ticket y participa para ganar
          un <span className="text-energizer-yellow font-bold">viaje a Playa del Carmen</span>, tecnología
          premium y muchos premios instantáneos.
        </p>

        {/* Alert */}
        <div className="inline-flex items-start gap-2 bg-energizer-orange/20 border border-energizer-orange/50 rounded-xl px-5 py-3 mb-8 max-w-xl mx-auto text-left">
          <span className="text-energizer-orange text-xl flex-shrink-0 mt-0.5">⚠️</span>
          <p className="text-energizer-orange text-sm font-medium">
            Recuerda guardar todos tus empaques y facturas registradas, serán solicitadas para entregar el premio.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => navigate('/registrar')}
            className="btn-primary text-base py-4 px-10 shadow-lg shadow-energizer-yellow/30"
          >
            🎟️ Registra tu ticket y gana
          </button>
          <button
            onClick={() => navigate('/productos')}
            className="border-2 border-white/30 text-white font-bold py-4 px-10 rounded-full uppercase tracking-wider hover:border-energizer-yellow hover:text-energizer-yellow transition-all duration-200"
          >
            Ver productos
          </button>
        </div>

        {/* Product badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {['🔋 Pilas AA', '🔋 Pilas AAA', '⚡ Pilas 9V', '🔌 Cargadores', '🔦 Linternas', '🔋 Pilas D/C'].map((badge) => (
            <span
              key={badge}
              className="bg-white/10 border border-white/20 text-white text-sm px-4 py-2 rounded-full font-medium"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
